import { motion } from 'framer-motion'
import { useState } from 'react'
import { screenVideos } from '../content/siteContent'

export default function PerspectiveVideoOverlay() {
    const [activeVideoId, setActiveVideoId] = useState(screenVideos[0].id)

    const activeVideo = screenVideos.find((video) => video.id === activeVideoId) ?? screenVideos[0]
    const secondaryVideos = screenVideos.filter((video) => video.id !== activeVideo.id)

    return (
        <section className="relative overflow-hidden rounded-[2.6rem] border border-slate-200/80 bg-[linear-gradient(160deg,rgba(24,36,58,0.98),rgba(42,56,78,0.95)_38%,rgba(86,57,48,0.88)_78%,rgba(42,56,78,0.95))] px-4 py-6 shadow-[0_40px_140px_rgba(15,23,42,0.28)] sm:px-6 sm:py-8 lg:px-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(125,211,252,0.28),transparent_18%),radial-gradient(circle_at_84%_16%,rgba(252,211,77,0.2),transparent_18%),radial-gradient(circle_at_48%_72%,rgba(244,114,182,0.1),transparent_22%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.12]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '38px 38px' }} />

            <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.42em] text-cyan-100/70">Portfolio in Motion</p>
                        <p className="mt-2 text-sm text-slate-300/80">Select any reel to bring it forward and view it as the hero piece.</p>
                    </div>
                    <div className="hidden rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-slate-200/75 shadow-[0_10px_30px_rgba(0,0,0,0.25)] sm:block">
                        Tap a Reel to Focus
                    </div>
                </div>

                <div className="space-y-4">
                    <motion.article
                        key={activeVideo.id}
                        initial={{ opacity: 0, y: 18, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="relative overflow-hidden rounded-[2.1rem] border border-white/12 bg-white/[0.04] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.4)]"
                    >
                        <div className="absolute inset-x-6 top-4 z-20 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/78">
                            <span>{activeVideo.accent}</span>
                            <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[9px] tracking-[0.24em] text-white/68">
                                Main Screen
                            </span>
                        </div>

                        <motion.div
                            key={`${activeVideo.id}-frame`}
                            initial={{ opacity: 0.72, scale: 0.94, filter: 'blur(8px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 0.55, ease: 'easeOut' }}
                            className="relative overflow-hidden rounded-[1.65rem] bg-black aspect-[16/10]"
                        >
                            <iframe
                                key={activeVideo.id}
                                className="h-full w-full"
                                src={`${activeVideo.embedUrl}&autoplay=1&mute=1`}
                                title={activeVideo.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.03)_18%,rgba(0,0,0,0.14)_52%,rgba(0,0,0,0.42))]" />
                            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),inset_0_14px_24px_rgba(255,255,255,0.05),inset_0_-28px_36px_rgba(0,0,0,0.34)]" />
                        </motion.div>
                    </motion.article>

                    <div className="grid gap-3 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                        {secondaryVideos.map((video, index) => (
                            <button
                                key={video.id}
                                type="button"
                                onClick={() => setActiveVideoId(video.id)}
                                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-2 text-left shadow-[0_18px_50px_rgba(0,0,0,0.26)] transition duration-300 hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.06]"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45, delay: index * 0.04, ease: 'easeOut' }}
                                >
                                    <div className="absolute inset-x-4 top-3 z-20 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/74">
                                        <span>{video.accent}</span>
                                        <span className="rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[9px] tracking-[0.22em] text-white/64">
                                            Active
                                        </span>
                                    </div>

                                    <div className="relative overflow-hidden rounded-[1.15rem] bg-black aspect-[16/9]">
                                        <img
                                            className="pointer-events-none h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                                            src={video.poster}
                                            alt={video.title}
                                            loading="lazy"
                                        />
                                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.15),rgba(255,255,255,0.02)_18%,rgba(0,0,0,0.16)_54%,rgba(0,0,0,0.38))]" />
                                    </div>
                                    <div className="px-1 pb-1 pt-3">
                                        <p className="text-sm font-medium text-white/88">{video.title}</p>
                                    </div>
                                </motion.div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
