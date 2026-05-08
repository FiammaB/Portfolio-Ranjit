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
    'Company Logo 2.png',
    'companylogo.png',
    'download (1).jpg',
    'download (1).png',
    'download (1).webp',
    'download (2).jpg',
    'download (2).png',
    'download (3).jpg',
    'download (3).png',
    'download (4).jpg',
    'download (4).png',
    'download (5).jpg',
    'download (5).png',
    'download (6).jpg',
    'download (6).png',
    'download (7).jpg',
    'download (7).png',
    'download.jpg',
    'download.png',
    'download.webp',
    'FILMS1-copy-copy-300x45.webp',
    'logo-y.png',
    'logo.png',
    'lX5vswczZoFSUq3H8dX6Db3zqjM.avif',
].map((fileName) => `/company-logos/Company Logos/${fileName}`)

const darkLogoBackgrounds = new Set([
    '/company-logos/Company Logos/logo.png',
    
    
    
    
    '/company-logos/Company Logos/lX5vswczZoFSUq3H8dX6Db3zqjM.avif',
])

const behindTheScenesStills = [
    '1622632106900.jpg',
    '1622632106920.jpg',
    '1622632106938.jpg',
    '1622632106956.jpg',
    '1622632106975.jpg',
    '1622632106994.jpg',
    '29933.jpg',
    '29934.jpg',
    '34368.jpg',
    '34371.jpg',
    '34372.jpg',
    '34373.jpg',
    '34378.jpg',
    'AJP_0002.JPG',
    'AJP_0029.JPG',
    'AJP_0200.JPG',
    'AJP_0204.JPG',
    'AJP_1691.JPG',
    'AJP_1796.JPG',
    'AJP_1799.JPG',
    'AJP_1922.JPG',
    'AJP_1924.JPG',
    'AJP_1930.JPG',
    'AJP_2944.JPG',
    'AJP_2948.JPG',
    'AJP_2975.JPG',
    'AJP_9708.JPG',
    'DSC_0351_1.jpg',
    'IMG-20231030-WA0010.jpg',
    'IMG-20231030-WA0011.jpg',
    'IMG-20231030-WA0013.jpg',
    'IMG-20231030-WA0014.jpg',
    'IMG-20231030-WA0016.jpg',
    'IMG-20231030-WA0019.jpg',
    'IMG-20231030-WA0020.jpg',
    'IMG-20231030-WA0021.jpg',
    'IMG-20231030-WA0025.jpg',
    'IMG-20231210-WA0065.jpg',
    'IMG-20250617-WA0142.jpg',
    'IMG-20250617-WA0143.jpg',
    'IMG-20250617-WA0144.jpg',
    'IMG-20250617-WA0145.jpg',
    'IMG-20250617-WA0146.jpg',
    'IMG_2473.JPG',
    'IMG_2646.JPG',
    'IMG_2648.JPG',
    'IMG_2921.JPG',
    'IMG_2922.JPG',
    'IMG_4293.JPG',
    'IMG_4294.JPG',
    'IMG_4295.JPG',
    'IMG_4296.JPG',
    'IMG_4297.JPG',
    'WhatsApp Image 2023-10-30 at 21.36.05_0be0ba86.jpg',
    'WhatsApp Image 2023-10-30 at 21.36.05_5f25e707.jpg',
    'WhatsApp Image 2023-12-15 at 22.34.24_9cb2052d.jpg',
    'WhatsApp Image 2023-12-22 at 11.22.48_b3fc4b0f.jpg',
    'WhatsApp Image 2026-03-13 at 11.45.07 PM.jpeg',
    'WhatsApp Image 2026-03-13 at 11.45.14 PM.jpeg',
    'WhatsApp Image 2026-03-13 at 11.45.15 PM.jpeg',
    'WhatsApp Image 2026-03-13 at 11.45.16 PM.jpeg',
    'WhatsApp Image 2026-03-13 at 11.45.17 PM (1).jpeg',
    'WhatsApp Image 2026-03-13 at 11.45.17 PM.jpeg',
    'WhatsApp Image 2026-03-13 at 11.45.18 PM (1).jpeg',
    'WhatsApp Image 2026-03-13 at 11.45.18 PM (2).jpeg',
].map((fileName) => `/working-stills/${fileName}`)

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
                        Every supplied logo is included here, but reduced into a softer brand wall so the section feels complete without overpowering the page.
                    </p>
                </div>

                <div className="mt-10 rounded-[2rem] border border-[var(--border-soft)] bg-white/52 p-4 shadow-[0_18px_40px_rgba(66,76,119,0.06)] sm:p-5">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                    {partnerLogos.map((logoSrc, index) => (
                        <div
                            key={logoSrc}
                            className="group relative flex min-h-20 items-center justify-center rounded-[1.2rem] border border-[var(--border-soft)] bg-white/62 p-3 transition duration-300 hover:z-10 hover:scale-[1.16] hover:bg-white/92 hover:shadow-[0_24px_54px_rgba(66,76,119,0.18)]"
                            style={{
                                background:
                                    index % 3 === 0
                                        ? 'linear-gradient(160deg, rgba(255, 255, 255, 0.78), rgba(237, 244, 255, 0.72))'
                                        : index % 3 === 1
                                            ? 'linear-gradient(160deg, rgba(255, 255, 255, 0.78), rgba(246, 236, 255, 0.72))'
                                            : 'linear-gradient(160deg, rgba(255, 255, 255, 0.78), rgba(255, 241, 229, 0.72))',
                            }}
                        >
                            <div
                                className={`flex w-full items-center justify-center rounded-[0.95rem] px-2 py-2 transition duration-300 ${
                                    darkLogoBackgrounds.has(logoSrc)
                                        ? 'bg-[linear-gradient(160deg,rgba(17,24,39,0.96),rgba(51,65,85,0.88))]'
                                        : 'bg-transparent'
                                }`}
                            >
                                <img
                                    src={logoSrc}
                                    alt="Company logo"
                                    className="max-h-9 w-full object-contain opacity-95 transition duration-300 group-hover:scale-[1.24]"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                    </div>
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
                        All supplied stills are included here as a compact contact sheet, so the volume of work is visible without making the page feel too heavy.
                    </p>
                </div>

                <div className="mt-10 rounded-[2rem] border border-[var(--border-soft)] bg-white/52 p-4 shadow-[0_18px_40px_rgba(66,76,119,0.06)] sm:p-5">
                    <div className="max-h-[42rem] overflow-y-auto pr-1">
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {behindTheScenesStills.map((stillSrc) => (
                        <figure
                            key={stillSrc}
                            className="group relative overflow-hidden rounded-[1.3rem] border border-[var(--border-soft)] bg-white/72 shadow-[0_12px_28px_rgba(66,76,119,0.06)] transition duration-300 hover:z-10 hover:scale-[1.42] hover:shadow-[0_36px_80px_rgba(66,76,119,0.22)]"
                        >
                            <img
                                src={stillSrc}
                                alt="Behind the scenes production still"
                                className="h-28 w-full object-cover transition duration-500 group-hover:scale-[1.12] sm:h-32"
                                loading="lazy"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_30%,rgba(0,0,0,0.12))] opacity-0 transition duration-300 group-hover:opacity-100" />
                        </figure>
                    ))}
                        </div>
                    </div>
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
