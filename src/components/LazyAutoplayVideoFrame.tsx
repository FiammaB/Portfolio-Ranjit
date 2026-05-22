import { Play } from 'lucide-react'
import { useEffect, useId, useMemo, useRef, useState } from 'react'

interface LazyAutoplayVideoFrameProps {
    title: string
    embedUrl: string
    poster: string
    autoplay?: boolean
    muted?: boolean
    controls?: boolean
    loading?: 'eager' | 'lazy'
    className?: string
    rootMargin?: string
    activationMode?: 'scroll' | 'click'
    badge?: string
    hint?: string
    playLabel?: string
    enableJsApi?: boolean
    onPlaybackEnd?: () => void
}

export default function LazyAutoplayVideoFrame({
    title,
    embedUrl,
    poster,
    autoplay = true,
    muted = true,
    controls = false,
    loading = 'lazy',
    className = 'h-full w-full',
    rootMargin = '300px 0px',
    activationMode = 'scroll',
    badge,
    hint,
    playLabel = 'Play reel',
    enableJsApi = false,
    onPlaybackEnd,
}: LazyAutoplayVideoFrameProps) {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const iframeRef = useRef<HTMLIFrameElement | null>(null)
    const [shouldLoad, setShouldLoad] = useState(loading === 'eager' && activationMode === 'scroll')
    const instanceId = useId()

    const playerDomId = useMemo(
        () => `player-${instanceId.replace(/[^a-zA-Z0-9_-]/g, '')}`,
        [instanceId],
    )

    useEffect(() => {
        if (activationMode !== 'scroll' || shouldLoad || !containerRef.current) return

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    setShouldLoad(true)
                    observer.disconnect()
                }
            },
            { rootMargin },
        )

        observer.observe(containerRef.current)

        return () => observer.disconnect()
    }, [activationMode, rootMargin, shouldLoad])

    const params = new URLSearchParams()
    params.set('rel', '0')
    params.set('modestbranding', '1')
    params.set('playsinline', '1')
    params.set('iv_load_policy', '3')
    params.set('cc_load_policy', '0')
    params.set('fs', controls ? '1' : '0')
    params.set('disablekb', controls ? '0' : '1')
    params.set('autoplay', autoplay ? '1' : '0')
    params.set('mute', muted ? '1' : '0')
    params.set('controls', controls ? '1' : '0')
    if (enableJsApi) {
        params.set('enablejsapi', '1')
        params.set('origin', window.location.origin)
    }

    const src = `${embedUrl}${embedUrl.includes('?') ? '&' : '?'}${params.toString()}`

    useEffect(() => {
        if (!shouldLoad || !enableJsApi || !iframeRef.current) return

        const iframe = iframeRef.current
        const targetOrigin = new URL(src).origin

        const registerStateListener = () => {
            iframe.contentWindow?.postMessage(
                JSON.stringify({
                    event: 'command',
                    func: 'addEventListener',
                    args: ['onStateChange'],
                }),
                targetOrigin,
            )
        }

        registerStateListener()
        const timerId = window.setTimeout(registerStateListener, 1200)

        const handleMessage = (event: MessageEvent) => {
            if (!['https://www.youtube.com', 'https://www.youtube-nocookie.com'].includes(event.origin)) {
                return
            }

            if (typeof event.data !== 'string') return

            try {
                const payload = JSON.parse(event.data) as {
                    event?: string
                    info?: number
                    id?: string
                }

                if (payload.event === 'onStateChange' && payload.info === 0 && payload.id === playerDomId) {
                    onPlaybackEnd?.()
                }
            } catch {
                return
            }
        }

        window.addEventListener('message', handleMessage)

        return () => {
            window.clearTimeout(timerId)
            window.removeEventListener('message', handleMessage)
        }
    }, [enableJsApi, onPlaybackEnd, playerDomId, shouldLoad, src])

    return (
        <div ref={containerRef} className="relative h-full w-full bg-slate-950">
            {shouldLoad ? (
                <iframe
                    id={playerDomId}
                    ref={iframeRef}
                    className={className}
                    src={src}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading={loading}
                    allowFullScreen
                />
            ) : (
                <button
                    type="button"
                    onClick={() => setShouldLoad(true)}
                    className="group relative h-full w-full overflow-hidden text-left"
                    aria-label={`${playLabel}: ${title}`}
                >
                    <img
                        src={poster}
                        alt={title}
                        className={className + ' object-cover transition duration-500 group-hover:scale-[1.03]'}
                        loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01)_28%,rgba(0,0,0,0.16)_62%,rgba(0,0,0,0.55))]" />
                    <div className="pointer-events-none absolute inset-x-4 top-4 flex items-start justify-between gap-3">
                        {badge ? (
                            <span className="rounded-full border border-white/18 bg-black/36 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/86">
                                {badge}
                            </span>
                        ) : <span />}
                        {hint ? (
                            <span className="max-w-[12rem] rounded-full border border-white/14 bg-black/30 px-3 py-1 text-right text-[10px] uppercase tracking-[0.2em] text-white/72">
                                {hint}
                            </span>
                        ) : null}
                    </div>
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <span className="inline-flex items-center gap-3 rounded-full border border-white/18 bg-[rgba(8,12,20,0.68)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-[0_18px_40px_rgba(0,0,0,0.32)] transition duration-300 group-hover:scale-[1.03] group-hover:bg-[rgba(8,12,20,0.8)]">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/16 bg-white/12">
                                <Play size={16} fill="currentColor" />
                            </span>
                            {playLabel}
                        </span>
                    </div>
                </button>
            )}
        </div>
    )
}
