import { motion } from 'framer-motion'
import { Clapperboard, ScanSearch } from 'lucide-react'
import PerspectiveVideoOverlay from './PerspectiveVideoOverlay'

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative overflow-hidden px-6 pb-20 pt-28 sm:px-8 lg:px-12"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(93,173,255,0.22),_transparent_28%),radial-gradient(circle_at_65%_20%,_rgba(255,149,84,0.18),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(154,92,255,0.18),_transparent_26%)]" />

            <div className="relative mx-auto max-w-7xl">
                <div className="grid gap-10 xl:grid-cols-[1.08fr_0.92fr] xl:items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="order-2 space-y-6 xl:order-2"
                    >
                        <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-orange)] sm:tracking-[0.34em]">
                            International Production Executive
                        </p>
                        <h1 className="max-w-4xl text-5xl text-[var(--surface-strong)] sm:text-6xl lg:text-7xl">
                            Umang Agarwal
                        </h1>
                        <p className="max-w-4xl text-xl leading-8 text-[var(--surface-strong)] sm:text-2xl">
                            Executive Producer | Line Producer | Cross-Border Production Specialist for Feature Films, HETV, Commercials & Documentaries
                        </p>
                        <p className="max-w-3xl text-lg leading-9 text-[var(--text-soft)]">
                            21+ years delivering Feature Films, HETV, Commercials, Documentaries and international productions across India, the UK and overseas.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white/70 px-5 py-3 text-sm text-[var(--surface-strong)] shadow-[0_12px_30px_rgba(58,67,106,0.08)]">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(94,197,255,0.2)] text-[var(--surface-panel)]">
                                    <Clapperboard size={16} />
                                </span>
                                <span className="font-semibold uppercase tracking-[0.2em]">Film Systems</span>
                            </div>
                            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white/70 px-5 py-3 text-sm text-[var(--surface-strong)] shadow-[0_12px_30px_rgba(58,67,106,0.08)]">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(245,154,84,0.22)] text-[var(--surface-panel)]">
                                    <ScanSearch size={16} />
                                </span>
                                <span className="font-semibold uppercase tracking-[0.2em]">Permits + Logistics</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 36 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                        className="order-1 xl:order-1"
                    >
                        <PerspectiveVideoOverlay />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
