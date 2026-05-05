import { motion } from 'framer-motion'
import { ArrowRight, DownloadCloud, Film } from 'lucide-react'

const services = [
    'Executive Production',
    'Line Production',
    'International Production Facilitation',
    'India Fixer Services',
    'UK–India Production Coordination',
    'Film Permits & Government Approvals',
    'Customs & Carnet Handling',
    'Crew & Equipment Logistics',
    'Location Management',
    'Tax Incentive Facilitation',
    'Production Budgeting',
    'Visa Coordination',
    'Remote Production Support',
    'Commercials / Documentary / Feature Support',
]

const testimonials = [
    {
        quote:
            'Under immense pressure, Ranjit kept the Thailand feature on schedule and negotiated customs clearance for 17 crates of camera equipment within hours. His calm command across borders made the production feel secure.',
        name: 'Alex Hart',
        role: 'UK Line Producer',
    },
    {
        quote:
            'A trusted international partner who understands broadcaster compliance and crew visas. He delivered a complex India shoot for a European streaming campaign with exceptional budget discipline.',
        name: 'Sophie Lane',
        role: 'Creative Director, London Agency',
    },
    {
        quote:
            'Ranjit’s operations team handled government permissions, carnet processing and vendor coordination without drama. He is the kind of producer that execution teams rely on when timelines tighten.',
        name: 'Emma Reid',
        role: 'Executive Producer, Global Studio',
    },
]

const works = [
    {
        label: 'Thailand Feature',
        detail: 'Executive Producer – 100-person crew, customs, permits and location logistics.',
    },
    {
        label: 'UK Streamer Campaign',
        detail: 'Line Production – UK–India coordination, talent visas, carnet handling and deliverables.',
    },
    {
        label: 'International Documentary',
        detail: 'Production Facilitation – cross-border crew, insurance, permits and remote support.',
    },
    {
        label: 'Luxury Brand Film',
        detail: 'Production Management – equipment, logistics and premium location execution.',
    },
]

export default function PortfolioSections() {
    return (
        <>
            <section id="about" className="mt-24 scroll-mt-24 bg-white">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
                    <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                        <div className="space-y-6">
                            <p className="text-sm uppercase tracking-[0.32em] text-amber-600">Positioning</p>
                            <h2 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
                                Calm, senior production delivery for UK and European teams filming in India.
                            </h2>
                            <p className="max-w-2xl text-lg leading-9 text-slate-600">
                                I work with UK studios, agencies and streamers to manage the full production pathway in India — from approvals, permits and incentives to customs, locations and crew.
                            </p>
                        </div>
                        <div className="grid gap-5 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm shadow-slate-200/50">
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Industries</p>
                                <p className="mt-3 text-lg font-semibold text-slate-900">Film, commercial, documentary, branded content, OTT.</p>
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Scale</p>
                                <p className="mt-3 text-lg font-semibold text-slate-900">Crews up to 120 people, large crews, multi-unit schedules.</p>
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Capability</p>
                                <p className="mt-3 text-lg font-semibold text-slate-900">Risk mitigation, logistics, compliance, customs and incentives.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="bg-slate-50">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
                    <div className="space-y-6">
                        <p className="text-sm uppercase tracking-[0.32em] text-amber-600">Services</p>
                        <h2 className="text-4xl font-semibold text-slate-900 sm:text-5xl">What I deliver for UK and European producers.</h2>
                        <p className="max-w-2xl text-lg leading-9 text-slate-600">
                            Clear production capability for international shoots in India: executive and line production, permits, customs, carnet handling, visas, incentives and logistics.
                        </p>
                        <div className="mt-12 grid gap-6 lg:grid-cols-3">
                            {services.map((service) => (
                                <div key={service} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                                    <p className="text-base font-semibold text-slate-900">{service}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
                    <div className="space-y-6">
                        <p className="text-sm uppercase tracking-[0.32em] text-amber-600">Portfolio</p>
                        <h2 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Selected projects with real operational impact.</h2>
                    </div>

                    <div className="mt-12 grid gap-6 lg:grid-cols-2">
                        {works.map((work) => (
                            <div key={work.label} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 shadow-sm shadow-slate-200/50">
                                <p className="text-sm uppercase tracking-[0.28em] text-amber-600">{work.label}</p>
                                <p className="mt-4 text-lg font-semibold text-slate-900">{work.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="showreel" className="relative overflow-hidden py-32" style={{ background: 'linear-gradient(135deg, #fff5f0 0%, #fff0f8 50%, #f5f0ff 100%)' }}>
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-400/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-orange-400/15 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 -right-40 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl" />
                    <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10" width="600" height="600" viewBox="0 0 600 600">
                        <g stroke="url(#grad1)" strokeWidth="2" fill="none">
                            <path d="M 200 150 L 400 150 L 450 300 L 400 450 L 200 450 L 150 300 Z" />
                            <path d="M 250 200 L 350 200 L 380 300 L 350 400 L 250 400 L 220 300 Z" />
                            <path d="M 300 250 L 300 350 M 250 300 L 350 300" />
                        </g>
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#fb7185', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#fb923c', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-20"
                    >
                        <p className="text-sm uppercase tracking-[0.32em] text-rose-500 mb-4 font-semibold">Visual Credentials</p>
                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">Watch the work<br />in motion.</h2>
                        <p className="max-w-2xl text-lg text-slate-700">
                            Cinematic showcases capturing the energy, scale and precision of international production delivery.
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute inset-0 opacity-30">
                            <div className="absolute top-16 left-12 h-72 w-72 rounded-[2.5rem] border-2 border-rose-200/70 bg-rose-200/15 blur-3xl" />
                            <div className="absolute top-28 right-8 h-64 w-64 rounded-[2.5rem] border-2 border-orange-200/70 bg-orange-200/15 blur-3xl" />
                            <div className="absolute bottom-24 left-1/3 h-56 w-56 rounded-[2.5rem] border-2 border-pink-200/70 bg-pink-200/15 blur-3xl" />
                        </div>

                        <div className="relative grid gap-6 lg:grid-cols-[1.3fr_0.9fr] xl:grid-cols-[1.5fr_0.8fr]">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, delay: 0.1 }}
                                className="group relative overflow-hidden rounded-[3rem] border-2 border-rose-400/50 bg-white/90 shadow-2xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-transparent to-orange-50 opacity-60" />
                                <div className="relative aspect-[16/9] overflow-hidden">
                                    <iframe
                                        className="w-full h-full"
                                        src="https://player.vimeo.com/video/946888130?badge=0&autoplay=0&loop=0&title=0&byline=0&portrait=0"
                                        title="Production Reel"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                </div>
                                <div className="relative p-6">
                                    <p className="text-xs uppercase tracking-[0.28em] text-rose-500 font-semibold">Production Reel</p>
                                    <h3 className="mt-4 text-3xl font-bold text-slate-900">Cross-border production in large format.</h3>
                                </div>
                            </motion.div>

                            <div className="grid gap-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.9, delay: 0.15 }}
                                    className="group relative overflow-hidden rounded-[3rem] border-2 border-orange-400/50 bg-white/90 shadow-2xl"
                                >
                                    <div className="relative aspect-[16/9] overflow-hidden">
                                        <iframe
                                            className="w-full h-full"
                                            src="https://player.vimeo.com/video/932360535?badge=0&autoplay=0&loop=0&title=0&byline=0&portrait=0"
                                            title="Cinematic Work"
                                            frameBorder="0"
                                            allow="autoplay; fullscreen; picture-in-picture"
                                            allowFullScreen
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <p className="text-xs uppercase tracking-[0.28em] text-orange-500 font-semibold">Cinematic Work</p>
                                        <h3 className="mt-4 text-2xl font-bold text-slate-900">A lighter, refined motion study.</h3>
                                    </div>
                                </motion.div>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.9, delay: 0.2 }}
                                        className="group relative overflow-hidden rounded-[2.5rem] border-2 border-pink-400/50 bg-white/90 shadow-xl"
                                    >
                                        <div className="relative aspect-[16/9] overflow-hidden">
                                            <iframe
                                                className="w-full h-full"
                                                src="https://player.vimeo.com/video/932362750?badge=0&autoplay=0&loop=0&title=0&byline=0&portrait=0"
                                                title="Edit & Motion"
                                                frameBorder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowFullScreen
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <p className="text-xs uppercase tracking-[0.28em] text-pink-500 font-semibold">Edit & Motion</p>
                                            <p className="mt-3 text-sm text-slate-700">Layered production craft in a compact rectangle.</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.9, delay: 0.25 }}
                                        className="group relative overflow-hidden rounded-[2.5rem] border-2 border-rose-300/50 bg-white/90 shadow-xl"
                                    >
                                        <div className="relative aspect-[16/9] overflow-hidden">
                                            <iframe
                                                className="w-full h-full"
                                                src="https://player.vimeo.com/video/922797195?badge=0&autoplay=0&loop=0&title=0&byline=0&portrait=0"
                                                title="Behind Scenes"
                                                frameBorder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowFullScreen
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <p className="text-xs uppercase tracking-[0.28em] text-rose-500 font-semibold">Behind Scenes</p>
                                            <p className="mt-3 text-sm text-slate-700">Operational detail in a crisp content block.</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.3 }}
                            className="group relative overflow-hidden rounded-[3rem] border-2 border-orange-300/50 bg-white/90 shadow-2xl mt-6 lg:col-span-2"
                        >
                            <div className="relative aspect-[3/1] overflow-hidden">
                                <iframe
                                    className="w-full h-full"
                                    src="https://player.vimeo.com/video/922797412?badge=0&autoplay=0&loop=0&title=0&byline=0&portrait=0"
                                    title="Location Scout"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-6">
                                <p className="text-xs uppercase tracking-[0.28em] text-orange-500 font-semibold">Location Scout</p>
                                <h3 className="mt-4 text-2xl font-bold text-slate-900">A long rectangle for the scouting narrative.</h3>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.3 }}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-24 mb-16"
                    >
                        {[
                            { label: '100+', desc: 'Crew Mobilisations' },
                            { label: '17', desc: 'Customs Clearances' },
                            { label: '50k+', desc: 'Hours Produced' },
                            { label: '3', desc: 'Continents' },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                                whileHover={{ scale: 1.08, y: -6 }}
                                className="group relative p-6 rounded-2xl border-2 border-rose-200/60 bg-white/40 hover:bg-white/60 hover:border-rose-400/60 backdrop-blur transition"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-400/10 to-orange-300/10 opacity-0 group-hover:opacity-100 transition duration-300" />
                                <div className="relative z-10">
                                    <p className="text-3xl sm:text-4xl font-bold text-rose-600">{stat.label}</p>
                                    <p className="mt-2 text-xs sm:text-sm text-slate-700 group-hover:text-slate-800 transition leading-tight">{stat.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.4 }}
                        className="flex flex-wrap gap-3 justify-center pt-8"
                    >
                        <a
                            href="https://vimeo.com/946888130"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-500 hover:bg-rose-600 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-white transition shadow-lg hover:shadow-rose-400/50"
                        >
                            ▶ Production Reel
                        </a>
                        <a
                            href="https://vimeo.com/932360535"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-400 hover:bg-orange-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-white transition border border-orange-300 hover:border-orange-500"
                        >
                            ▶ Cinematic
                        </a>
                        <a
                            href="https://vimeo.com/932362750"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-400 hover:bg-pink-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-white transition border border-pink-300 hover:border-pink-500"
                        >
                            ▶ Edit & Motion
                        </a>
                        <a
                            href="https://vimeo.com/922797195"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-400 hover:bg-rose-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-white transition border border-rose-300 hover:border-rose-500"
                        >
                            ▶ Behind Scenes
                        </a>
                        <a
                            href="https://vimeo.com/922797412"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-400 hover:bg-orange-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-white transition border border-orange-300 hover:border-orange-500"
                        >
                            ▶ Location Scout
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-full border-2 border-rose-300 hover:border-rose-500 bg-white/50 hover:bg-white/80 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-slate-800 transition"
                        >
                            Discuss Your Project
                        </a>
                    </motion.div>
                </div>
            </section >

            <section id="focus" className="bg-slate-50">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
                    <div className="grid gap-6 lg:grid-cols-2">
                        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/50">
                            <p className="text-sm uppercase tracking-[0.32em] text-amber-600">Stills and Photography</p>
                            <h3 className="mt-4 text-3xl font-semibold text-slate-900">Complex fashion and brand shoots</h3>
                            <p className="mt-4 text-slate-600 leading-8">
                                I manage production for premium stills shoots, from locations and permissions to crew, styling logistics and final delivery.
                            </p>
                        </div>
                        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/50">
                            <p className="text-sm uppercase tracking-[0.32em] text-amber-600">Moving Image</p>
                            <h3 className="mt-4 text-3xl font-semibold text-slate-900">Editorial commercials and documentaries</h3>
                            <p className="mt-4 text-slate-600 leading-8">
                                From commercial campaigns to factual storytelling, I keep tight control over crew, permits, equipment and post-production handoff.
                            </p>
                        </div>
                        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/50">
                            <p className="text-sm uppercase tracking-[0.32em] text-amber-600">Post Production</p>
                            <h3 className="mt-4 text-3xl font-semibold text-slate-900">Delivery-ready production management</h3>
                            <p className="mt-4 text-slate-600 leading-8">
                                I bring editorial awareness to grading, VFX, edit and asset delivery, ensuring the shoot closure is as disciplined as the production phase.
                            </p>
                        </div>
                        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/50">
                            <p className="text-sm uppercase tracking-[0.32em] text-amber-600">Time & Budgets</p>
                            <h3 className="mt-4 text-3xl font-semibold text-slate-900">Tight scoping and reliable schedules</h3>
                            <p className="mt-4 text-slate-600 leading-8">
                                Detailed budgets, contingency planning and production timelines that help UK clients feel secure on each phase of a shoot.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
                    <div className="space-y-6">
                        <p className="text-sm uppercase tracking-[0.32em] text-amber-600">Mentions</p>
                        <h2 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Producers, execs and agencies that trust the delivery.</h2>
                        <div className="mt-12 grid gap-6 lg:grid-cols-3">
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.name} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 shadow-sm shadow-slate-200/50">
                                    <p className="text-lg leading-8 text-slate-700">“{testimonial.quote}”</p>
                                    <div className="mt-6 text-sm text-slate-500">
                                        <p className="font-semibold text-slate-900">{testimonial.name}</p>
                                        <p>{testimonial.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-slate-50">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
                    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                        <div className="space-y-6">
                            <p className="text-sm uppercase tracking-[0.32em] text-amber-600">Contact</p>
                            <h2 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Talk through your next UK–India production.</h2>
                            <p className="max-w-xl text-lg leading-8 text-slate-600">
                                Reach out for a UK-format CV, showreel or a production conversation focused on India shoot delivery, customs, incentives and international crew coordination.
                            </p>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Email</p>
                                    <p className="mt-3 text-lg font-semibold text-slate-900">umang@umangagarwal.com</p>
                                </div>
                                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">WhatsApp</p>
                                    <p className="mt-3 text-lg font-semibold text-slate-900">+91 98765 43210</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/50">
                            <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-500 text-slate-950">
                                    <DownloadCloud size={24} />
                                </div>
                                <div>
                                    <p className="text-sm uppercase tracking-[0.24em] text-amber-600">UK CV</p>
                                    <p className="mt-2 text-lg font-semibold text-slate-900">Production resume available on request.</p>
                                </div>
                            </div>
                            <div className="mt-8 space-y-4 text-slate-600">
                                <p>Concise international achievements, shoot highlights and operational outcomes.</p>
                                <p>Includes crew mobilisation, customs clearance, permits, incentives and UK/EU delivery.</p>
                                <div className="inline-flex items-center gap-2 text-amber-600">
                                    <ArrowRight size={16} />
                                    <span className="text-sm uppercase tracking-[0.24em]">Request CV</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
