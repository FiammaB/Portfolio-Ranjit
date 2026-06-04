import { ArrowRight, Clapperboard, ScanSearch } from 'lucide-react'
import PerspectiveVideoOverlay from './PerspectiveVideoOverlay'
import { heroContent } from '../content/siteContent'

const credentials = [
    { value: '21+', label: 'Years in production' },
    { value: 'UK / EU', label: 'Client-facing delivery' },
    { value: 'India', label: 'Local production execution' },
]

const reviewFlow = [
    'Watch selected reels',
    'Open key case studies',
    'Contact for project discussions',
]

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative overflow-hidden px-6 pb-24 pt-32 sm:px-8 lg:px-12"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(176,138,83,0.15),_transparent_24%),radial-gradient(circle_at_78%_18%,_rgba(19,35,60,0.1),_transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.55),transparent_38%)]" />

            <div className="relative mx-auto max-w-[88rem]">
                <div className="grid gap-12 xl:grid-cols-[0.98fr_1.02fr] xl:items-start">
                    <div className="order-1 space-y-8 xl:order-1">
                        <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-strong)] bg-white/72 px-4 py-2 text-[var(--surface-panel)] shadow-[0_16px_36px_rgba(16,24,38,0.06)]">
                            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-gold)]" />
                            <p className="text-[11px] uppercase tracking-[0.36em] text-[var(--accent-gold)]">
                                {heroContent.eyebrow}
                            </p>
                        </div>

                        <div className="space-y-5">
                            <h1 className="max-w-4xl text-5xl leading-none text-[var(--surface-strong)] sm:text-6xl lg:text-[5.25rem]">
                                {heroContent.name}
                            </h1>
                            <p className="max-w-4xl text-xl leading-8 text-[var(--surface-strong)] sm:text-[1.65rem]">
                                {heroContent.title}
                            </p>
                            <p className="max-w-3xl text-lg leading-9 text-[var(--text-soft)]">
                                {heroContent.summary}
                            </p>
                        </div>

                        <div className="rounded-[1.7rem] border border-[var(--border-soft)] bg-white/72 p-5 shadow-[0_12px_30px_rgba(16,24,38,0.06)]">
                            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--text-dim)]">How to review this site</p>
                            <div className="mt-4 grid gap-3 sm:grid-cols-3">
                                {reviewFlow.map((item, index) => (
                                    <div key={item} className="rounded-[1.1rem] border border-[var(--border-soft)] bg-white/72 px-4 py-3">
                                        <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-dim)]">0{index + 1}</p>
                                        <p className="mt-2 text-sm font-semibold text-[var(--surface-strong)]">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#work"
                                className="inline-flex items-center gap-3 rounded-full bg-[var(--surface-strong)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-[0_18px_44px_rgba(16,24,38,0.18)] transition hover:bg-[var(--surface-panel)]"
                            >
                                View Work
                                <ArrowRight size={16} />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-3 rounded-full border border-[var(--border-strong)] bg-white/72 px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--surface-strong)] transition hover:bg-white"
                            >
                                Get in Touch
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white/76 px-5 py-3 text-sm text-[var(--surface-strong)] shadow-[0_12px_30px_rgba(16,24,38,0.06)]">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(94,197,255,0.2)] text-[var(--surface-panel)]">
                                    <Clapperboard size={16} />
                                </span>
                                <span className="font-semibold uppercase tracking-[0.2em]">{heroContent.badges[0]}</span>
                            </div>
                            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white/76 px-5 py-3 text-sm text-[var(--surface-strong)] shadow-[0_12px_30px_rgba(16,24,38,0.06)]">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(176,138,83,0.18)] text-[var(--surface-panel)]">
                                    <ScanSearch size={16} />
                                </span>
                                <span className="font-semibold uppercase tracking-[0.2em]">{heroContent.badges[1]}</span>
                            </div>
                        </div>

                        <div className="grid gap-4 border-t border-[rgba(16,24,38,0.08)] pt-8 sm:grid-cols-3">
                            {credentials.map((credential) => (
                                <div key={credential.label} className="rounded-[1.6rem] border border-[var(--border-soft)] bg-white/62 p-5 backdrop-blur-sm">
                                    <p className="text-2xl font-semibold text-[var(--surface-strong)] sm:text-3xl">{credential.value}</p>
                                    <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[var(--text-dim)]">{credential.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="order-2 xl:order-2 xl:pl-4">
                        <PerspectiveVideoOverlay />
                    </div>
                </div>
            </div>
        </section>
    )
}
