import { useEffect, useRef, useState } from 'react'

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
}: LazyAutoplayVideoFrameProps) {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [shouldLoad, setShouldLoad] = useState(loading === 'eager')

    useEffect(() => {
        if (shouldLoad || !containerRef.current) return

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
    }, [rootMargin, shouldLoad])

    const params = new URLSearchParams()
    params.set('rel', '0')
    params.set('modestbranding', '1')
    params.set('playsinline', '1')
    params.set('autoplay', autoplay ? '1' : '0')
    params.set('mute', muted ? '1' : '0')
    params.set('controls', controls ? '1' : '0')

    return (
        <div ref={containerRef} className="relative h-full w-full bg-slate-950">
            {shouldLoad ? (
                <iframe
                    className={className}
                    src={`${embedUrl}&${params.toString()}`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading={loading}
                    allowFullScreen
                />
            ) : (
                <img
                    src={poster}
                    alt={title}
                    className={className + ' object-cover'}
                    loading="lazy"
                />
            )}
        </div>
    )
}
