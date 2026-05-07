import { Camera, Compass, Orbit, Sparkles } from 'lucide-react'

const services = [
    'Executive Production',
    'Line Production',
    'International Production Facilitation',
    'India Fixer Services',
    'UK-India Production Coordination',
    'Permits, Carnet and Customs',
    'Crew and Equipment Logistics',
    'Locations and Incentives',
]

const works = [
    {
        title: 'Thailand Feature',
        role: 'Executive Producer',
        detail:
            'Led a 100-person unit with customs, permits and multi-location scheduling under tight broadcaster deadlines.',
    },
    {
        title: 'UK Streamer Campaign',
        role: 'Line Production',
        detail:
            'Built the India execution layer for a European campaign, from visas and carnet handling to post handoff.',
    },
    {
        title: 'International Documentary',
        role: 'Production Facilitation',
        detail:
            'Managed remote approvals, cross-border crew movement and field logistics across sensitive locations.',
    },
    {
        title: 'Luxury Brand Film',
        role: 'Production Management',
        detail:
            'Delivered high-touch production design, equipment flow and premium-location execution for brand storytelling.',
    },
]

const capabilities = [
    {
        title: 'Film and Commercial Systems',
        text: 'Production built for directors, agencies and streamers that want a partner who can protect the image as carefully as the logistics.',
    },
    {
        title: 'Permissions without Friction',
        text: 'Government approvals, customs clearance, carnet management and practical scheduling aligned to the real pace of a shoot.',
    },
    {
        title: 'India as a Production Base',
        text: 'A local operating structure that feels legible to UK and European teams, from prep to final delivery.',
    },
]

const testimonials = [
    {
        quote:
            'With Umang on the ground, we did not have to worry about our crew getting stuck in customs or our shoot being shut down by local authorities.',
        name: 'International Production Team',
        role: 'Customs and Permits Feedback',
    },
    {
        quote:
            'Umang does not just manage the budget; he actively finds ways to save us money and leverage international tax incentives, making global shoots far more viable for our company.',
        name: 'Global Production Partner',
        role: 'Budget and Incentives Feedback',
    },
    {
        quote:
            'He understands exactly what British crews expect and delivers that standard seamlessly, no matter where in the world we are filming.',
        name: 'British Production Team',
        role: 'Cross-Border Operations Feedback',
    },
]

const partnerLogos = [
    '/company-logos/Company Logos/Company Logo 1.png',
    '/company-logos/Company Logos/companylogo.png',
    '/company-logos/Company Logos/download (2).png',
    '/company-logos/Company Logos/download (3).jpg',
    '/company-logos/Company Logos/download (5).png',
    '/company-logos/Company Logos/download.png',
    '/company-logos/Company Logos/ec-logo-header.png',
    '/company-logos/Company Logos/FILMS1-copy-copy-300x45.webp',
]

const behindTheScenesStills = [
    '/working-stills/AJP_0204.JPG',
    '/working-stills/AJP_2948.JPG',
    '/working-stills/IMG_4293.JPG',
    '/working-stills/IMG_4294.JPG',
]

export default function PortfolioSections() {
    return (
        <div className="space-y-10">
            <section id="about" className="rounded-[2.5rem] border border-[var(--border-soft)] bg-[linear-gradient(145deg,rgba(197,226,255,0.82),rgba(231,219,255,0.92))] p-8 shadow-[0_30px_80px_rgba(77,94,145,0.12)] sm:p-10 lg:p-14">
                <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white/65 px-4 py-2 text-[var(--surface-panel)]">
                            <Compass size={16} />
                            <p className="text-sm uppercase tracking-[0.34em] text-[var(--accent-cyan)]">Positioning</p>
                        </div>
                        <h2 className="max-w-4xl text-4xl text-[var(--surface-strong)] sm:text-5xl">
                            A production portfolio that feels built, not templated.
                        </h2>
                        <p className="max-w-3xl text-lg leading-9 text-[var(--text-soft)]">
                            My role is to translate complex shooting conditions into something dependable, elegant and visually coherent for UK and European collaborators working in India.
                        </p>
                    </div>

                    <div className="rounded-[2rem] border border-[var(--border-soft)] bg-white/70 p-7 backdrop-blur-sm">
                        <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-dim)]">Approach</p>
                        <div className="mt-5 space-y-5 text-[var(--surface-strong)]">
                            <div>
                                <p className="text-sm text-[var(--text-dim)]">Visual sensitivity</p>
                                <p className="mt-2 text-lg font-semibold">Creative-first production structure</p>
                            </div>
                            <div>
                                <p className="text-sm text-[var(--text-dim)]">Operational discipline</p>
                                <p className="mt-2 text-lg font-semibold">Permits, customs, crew and timing without chaos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
                <div className="rounded-[2.3rem] border border-[var(--border-soft)] bg-[linear-gradient(160deg,rgba(193,224,255,0.88),rgba(219,205,255,0.92))] p-8 sm:p-10">
                    <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white/60 px-4 py-2 text-[var(--surface-panel)]">
                        <Sparkles size={16} />
                        <p className="text-sm uppercase tracking-[0.34em] text-[var(--accent-orange)]">Services</p>
                    </div>
                    <h2 className="mt-5 text-4xl text-[var(--surface-strong)] sm:text-5xl">
                        The production layer behind the image.
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-[var(--text-soft)]">
                        Executive and line production shaped for international shoots that need both creative trust and practical control.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={service}
                            className="rounded-[1.8rem] border border-[var(--border-soft)] p-6 text-[var(--surface-strong)] backdrop-blur-sm"
                            style={{
                                background:
                                    index % 3 === 0
                                        ? 'linear-gradient(160deg, rgba(175, 219, 255, 0.94), rgba(210, 233, 255, 0.94))'
                                        : index % 3 === 1
                                            ? 'linear-gradient(160deg, rgba(224, 206, 255, 0.94), rgba(240, 229, 255, 0.94))'
                                            : 'linear-gradient(160deg, rgba(255, 214, 182, 0.94), rgba(255, 234, 220, 0.94))',
                            }}
                        >
                            <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-dim)]">
                                0{index + 1}
                            </p>
                            <p className="mt-5 text-lg font-semibold leading-7">{service}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="portfolio" className="rounded-[2.5rem] border border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(239,235,255,0.82))] p-8 sm:p-10 lg:p-14">
                <div className="flex flex-col gap-4">
                    <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white/70 px-4 py-2 text-[var(--surface-panel)]">
                        <Orbit size={16} />
                        <p className="text-sm uppercase tracking-[0.34em] text-[var(--accent-cyan)]">Portfolio</p>
                    </div>
                    <h2 className="text-4xl text-[var(--surface-strong)] sm:text-5xl">
                        Selected projects with real operational weight.
                    </h2>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    {works.map((work, index) => (
                        <article
                            key={work.title}
                            className="overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-white/72"
                        >
                            <div
                                className="h-2 w-full"
                                style={{
                                    background:
                                        index % 2 === 0
                                            ? 'linear-gradient(90deg, var(--accent-cyan), var(--accent-violet))'
                                            : 'linear-gradient(90deg, var(--accent-orange), var(--accent-violet))',
                                }}
                            />
                            <div className="space-y-4 p-7 sm:p-8">
                                <p className="text-sm uppercase tracking-[0.28em] text-[var(--text-dim)]">
                                    {work.role}
                                </p>
                                <h3 className="text-2xl font-semibold text-[var(--surface-strong)]">{work.title}</h3>
                                <p className="text-base leading-8 text-[var(--text-soft)]">{work.detail}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section id="capabilities" className="grid gap-6 lg:grid-cols-3">
                {capabilities.map((item, index) => (
                    <div
                        key={item.title}
                        className="rounded-[2rem] border p-7 sm:p-8"
                        style={{
                            borderColor: 'rgba(21, 28, 52, 0.12)',
                            background:
                                index === 0
                                    ? 'linear-gradient(160deg, rgba(189, 225, 255, 0.94), rgba(227, 241, 255, 0.94))'
                                    : index === 1
                                        ? 'linear-gradient(160deg, rgba(225, 205, 255, 0.94), rgba(243, 234, 255, 0.94))'
                                        : 'linear-gradient(160deg, rgba(255, 214, 182, 0.94), rgba(255, 237, 224, 0.94))',
                        }}
                    >
                        <p className="text-sm uppercase tracking-[0.28em] text-[var(--text-dim)]">Capability</p>
                        <h3 className="mt-4 text-2xl font-semibold text-[var(--surface-strong)]">{item.title}</h3>
                        <p className="mt-4 text-base leading-8 text-[var(--text-soft)]">{item.text}</p>
                    </div>
                ))}
            </section>

            <section id="customers" className="rounded-[2.5rem] border border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(255,248,240,0.9),rgba(233,242,255,0.86))] p-8 sm:p-10 lg:p-14">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white/70 px-4 py-2 text-[var(--surface-panel)]">
                            <Orbit size={16} />
                            <p className="text-sm uppercase tracking-[0.34em] text-[var(--accent-cyan)]">Customers</p>
                        </div>
                        <h2 className="text-4xl text-[var(--surface-strong)] sm:text-5xl">
                            Customers across brands, studios and campaigns.
                        </h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-[var(--text-soft)]">
                        Selected company marks from the supplied materials, presented as a quick trust layer for incoming production partners.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {partnerLogos.map((logoSrc, index) => (
                        <div
                            key={logoSrc}
                            className="flex min-h-28 items-center justify-center rounded-[1.7rem] border border-[var(--border-soft)] bg-white/76 p-6 shadow-[0_18px_40px_rgba(66,76,119,0.08)]"
                            style={{
                                background:
                                    index % 3 === 0
                                        ? 'linear-gradient(160deg, rgba(255, 255, 255, 0.88), rgba(237, 244, 255, 0.82))'
                                        : index % 3 === 1
                                            ? 'linear-gradient(160deg, rgba(255, 255, 255, 0.88), rgba(246, 236, 255, 0.82))'
                                            : 'linear-gradient(160deg, rgba(255, 255, 255, 0.88), rgba(255, 241, 229, 0.82))',
                            }}
                        >
                            <img
                                src={logoSrc}
                                alt="Company logo"
                                className="max-h-12 w-full object-contain opacity-85 saturate-[0.92]"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section id="behind-the-scenes" className="rounded-[2.5rem] border border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(235,241,255,0.92),rgba(255,239,229,0.9))] p-8 sm:p-10 lg:p-14">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white/70 px-4 py-2 text-[var(--surface-panel)]">
                            <Camera size={16} />
                            <p className="text-sm uppercase tracking-[0.34em] text-[var(--accent-orange)]">Behind The Scenes</p>
                        </div>
                        <h2 className="text-4xl text-[var(--surface-strong)] sm:text-5xl">
                            Behind the scenes stills from working sets.
                        </h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-[var(--text-soft)]">
                        A quick look at the crews, cameras and real production environments behind the delivery work.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                    {behindTheScenesStills.map((stillSrc, index) => (
                        <figure
                            key={stillSrc}
                            className={`group overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-white/72 shadow-[0_18px_40px_rgba(66,76,119,0.08)] ${
                                index === 0 ? 'md:col-span-2' : ''
                            }`}
                        >
                            <img
                                src={stillSrc}
                                alt="Behind the scenes production still"
                                className={`w-full object-cover transition duration-500 group-hover:scale-[1.02] ${
                                    index === 0 ? 'max-h-[34rem]' : 'h-[22rem]'
                                }`}
                                loading="lazy"
                            />
                        </figure>
                    ))}
                </div>
            </section>

            <section id="testimonials" className="rounded-[2.5rem] border border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(232,241,255,0.88),rgba(246,231,255,0.86))] p-8 sm:p-10 lg:p-14">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white/70 px-4 py-2 text-[var(--surface-panel)]">
                        <Camera size={16} />
                        <p className="text-sm uppercase tracking-[0.34em] text-[var(--accent-orange)]">Mentions</p>
                    </div>
                    <h2 className="text-4xl text-[var(--surface-strong)] sm:text-5xl">
                        Trusted when the shoot is beautiful and difficult.
                    </h2>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <blockquote
                            key={testimonial.name}
                            className="rounded-[1.9rem] border border-[var(--border-soft)] bg-white/72 p-7"
                        >
                            <p className="text-lg leading-8 text-[var(--text-soft)]">“{testimonial.quote}”</p>
                            <footer className="mt-6 text-sm">
                                <p className="font-semibold text-[var(--surface-strong)]">{testimonial.name}</p>
                                <p className="mt-1 text-[var(--text-dim)]">{testimonial.role}</p>
                            </footer>
                        </blockquote>
                    ))}
                </div>
            </section>

            <section id="contact" className="rounded-[2.5rem] border border-[var(--border-soft)] bg-[linear-gradient(155deg,rgba(206,227,255,0.92),rgba(236,219,255,0.94))] p-8 sm:p-10 lg:p-14">
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white/70 px-4 py-2 text-[var(--surface-panel)]">
                            <Compass size={16} />
                            <p className="text-sm uppercase tracking-[0.34em] text-[var(--accent-cyan)]">Contact</p>
                        </div>
                        <h2 className="text-4xl text-[var(--surface-strong)] sm:text-5xl">
                            Talk through the next UK-India production.
                        </h2>
                        <p className="max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                            Reach out for a CV, showreel conversation or a practical discussion around India shoot delivery, incentives, permits and remote production support.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        <div className="rounded-[1.8rem] border border-[var(--border-soft)] bg-white/72 p-6">
                            <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-dim)]">Email</p>
                            <p className="mt-3 text-xl font-semibold text-[var(--surface-strong)]">umang@umangagarwal.com</p>
                        </div>
                        <div className="rounded-[1.8rem] border border-[var(--border-soft)] bg-white/72 p-6">
                            <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-dim)]">WhatsApp</p>
                            <p className="mt-3 text-xl font-semibold text-[var(--surface-strong)]">+91 98765 43210</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
