import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section id="hero" className="bg-slate-50">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
                <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="space-y-8"
                    >
                        <div className="space-y-5">
                            <p className="text-sm uppercase tracking-[0.32em] text-amber-600">Executive Producer / Line Producer</p>
                            <h1 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                                Production partner for UK and European shoots in India.
                            </h1>
                            <div className="max-w-2xl space-y-5 text-lg leading-9 text-slate-600">
                                <p>
                                    I lead cross-border production for broadcasters, streamers and agencies, delivering feature, commercial and documentary shoots with calm, senior decision-making.
                                </p>
                                <p>
                                    From permits and incentives to customs, crew, locations and remote workflows — I make complex India shoots feel straightforward for UK and European teams.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#portfolio"
                                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-slate-800"
                            >
                                View Work
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-900 transition hover:border-slate-400"
                            >
                                Download CV
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-900 transition hover:border-slate-400"
                            >
                                Schedule Call
                            </a>
                        </div>
                    </motion.div>

                    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
                        <div className="grid gap-6">
                            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
                                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Trusted production partner</p>
                                <div className="mt-5 space-y-4 text-slate-700">
                                    <div>
                                        <p className="text-sm text-slate-500">Experience</p>
                                        <p className="mt-2 text-xl font-semibold">21+ years</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Coverage</p>
                                        <p className="mt-2 text-xl font-semibold">UK, Europe & India</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Specialty</p>
                                        <p className="mt-2 text-xl font-semibold">Permits · Customs · Crew · Logistics</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-[1.75rem] bg-slate-900 p-6 text-slate-50">
                                <p className="text-xs uppercase tracking-[0.28em] text-amber-300">Showreel preview</p>
                                <h2 className="mt-4 text-2xl font-semibold">Real film, commercial and documentary production delivery.</h2>
                                <p className="mt-3 text-sm leading-7 text-slate-300">
                                    A curated cinematic showreel focused on logistics, crew coordination and cross-border execution.
                                </p>
                                <a
                                    href="#showreel"
                                    className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-slate-100"
                                >
                                    View showreel
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
