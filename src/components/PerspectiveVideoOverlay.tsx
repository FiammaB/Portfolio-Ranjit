import { useState } from 'react'
import LazyAutoplayVideoFrame from './LazyAutoplayVideoFrame'
import { screenVideos } from '../content/siteContent'

export default function PerspectiveVideoOverlay() {
    const [activeVideoId, setActiveVideoId] = useState(screenVideos[0].id)

    const activeVideo = screenVideos.find((video) => video.id === activeVideoId) ?? screenVideos[0]
    const secondaryVideos = screenVideos.filter((video) => video.id !== activeVideo.id)
    const activeVideoIndex = screenVideos.findIndex((video) => video.id === activeVideo.id)

    const playNextVideo = () => {
        const nextVideo = screenVideos[(activeVideoIndex + 1) % screenVideos.length]
        setActiveVideoId(nextVideo.id)
    }

    return (
        <section className="relative overflow-hidden rounded-[2.2rem] border border-[rgba(255,255,255,0.56)] bg-[linear-gradient(165deg,rgba(247,242,234,0.98),rgba(255,255,255,0.94)_52%,rgba(239,232,222,0.98))] px-4 py-5 shadow-[0_24px_70px_rgba(16,24,38,0.12)] sm:rounded-[2.85rem] sm:px-6 sm:py-8 lg:px-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(176,138,83,0.16),transparent_18%),radial-gradient(circle_at_86%_18%,rgba(127,159,198,0.16),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.48),transparent_34%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(rgba(16,24,38,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(16,24,38,0.08) 1px, transparent 1px)', backgroundSize: '42px 42px' }} />

            <div className="relative z-10">
                <div className="mb-5 flex items-center justify-between gap-4 sm:mb-6">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.42em] text-[var(--accent-gold)]">Screening Room</p>
                        <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--text-soft)]">A curated reel wall for agencies, producers and broadcasters reviewing international production work.</p>
                    </div>
                    <div className="hidden rounded-full border border-[var(--border-soft)] bg-white/76 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--text-dim)] shadow-[0_10px_30px_rgba(16,24,38,0.08)] sm:block">
                        Select a Project
                    </div>
                </div>

                <div className="space-y-4">
                    <article
                        key={activeVideo.id}
                        className="relative overflow-hidden rounded-[1.7rem] border border-[rgba(16,24,38,0.08)] bg-[rgba(255,255,255,0.68)] p-2.5 shadow-[0_18px_46px_rgba(16,24,38,0.1)] sm:rounded-[2.1rem] sm:p-3 sm:shadow-[0_22px_60px_rgba(16,24,38,0.12)]"
                    >
                        <div className="absolute inset-x-6 top-4 z-20 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/88">
                            <span className="rounded-full border border-white/16 bg-black/36 px-3 py-1">{activeVideo.accent}</span>
                            <span className="rounded-full border border-white/16 bg-black/36 px-3 py-1 text-[9px] tracking-[0.24em] text-white/76">
                                Featured Project
                            </span>
                        </div>

                        <div
                            key={`${activeVideo.id}-frame`}
                            className="relative overflow-hidden rounded-[1.3rem] bg-[var(--surface-strong)] aspect-[16/10] sm:rounded-[1.65rem]"
                        >
                            <LazyAutoplayVideoFrame
                                key={activeVideo.id}
                                title={activeVideo.title}
                                embedUrl={activeVideo.embedUrl}
                                poster={activeVideo.poster}
                                loading="lazy"
                                controls
                                muted
                                enableJsApi
                                onPlaybackEnd={playNextVideo}
                            />
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.01)_18%,rgba(0,0,0,0.06)_54%,rgba(0,0,0,0.22))]" />
                            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),inset_0_-18px_28px_rgba(0,0,0,0.18)]" />
                        </div>
                        <div className="relative z-20 mt-4 flex items-center justify-between gap-4 px-1">
                            <div>
                                <p className="text-base font-semibold text-[var(--surface-strong)]">{activeVideo.title}</p>
                                <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[var(--text-dim)]">{activeVideo.region}</p>
                            </div>
                            <a
                                href={activeVideo.watchUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-strong)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-[var(--surface-panel)]"
                            >
                                Open on YouTube
                            </a>
                        </div>
                    </article>

                    <div className="hidden gap-3 md:grid md:grid-cols-3 xl:grid-cols-4">
                        {secondaryVideos.map((video, index) => (
                            <div
                                key={video.id}
                                className="group relative overflow-hidden rounded-[1.5rem] border border-[var(--border-soft)] bg-white/68 p-2 text-left shadow-[0_14px_34px_rgba(16,24,38,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:bg-white"
                            >
                                <div>
                                    <div className="absolute inset-x-4 top-3 z-20 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/82">
                                        <span className="rounded-full border border-white/16 bg-black/34 px-2 py-1">{video.accent}</span>
                                        <span className="rounded-full border border-white/16 bg-black/34 px-2 py-1 text-[9px] tracking-[0.22em] text-white/72">
                                            Preview
                                        </span>
                                    </div>

                                    <div className="relative overflow-hidden rounded-[1.15rem] bg-[var(--surface-strong)] aspect-[16/9]">
                                        <img
                                            className="h-full w-full object-cover"
                                            src={video.poster}
                                            alt={video.title}
                                            width={320}
                                            height={180}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/34 bg-black/42 text-[10px] uppercase tracking-[0.2em] text-white">
                                                Play
                                            </span>
                                        </div>
                                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.01)_18%,rgba(0,0,0,0.08)_54%,rgba(0,0,0,0.22))]" />
                                        <button
                                            type="button"
                                            onClick={() => setActiveVideoId(video.id)}
                                            className="absolute inset-0 z-10"
                                            aria-label={`Highlight ${video.title}`}
                                        />
                                    </div>
                                    <div className="px-1 pb-1 pt-3">
                                        <p className="text-sm font-medium text-[var(--surface-strong)]">{video.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
