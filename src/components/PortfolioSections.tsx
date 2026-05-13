import { useRef, useState } from 'react'
import { Camera, ChevronLeft, ChevronRight, Compass, Orbit, Sparkles } from 'lucide-react'
import LazyAutoplayVideoFrame from './LazyAutoplayVideoFrame'
import { testimonials, workCategoryGroups, workVideoGroups } from '../content/siteContent'

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
        title: 'International Feature Shoot',
        format: 'Feature Film',
        territory: 'UK x India',
        year: 'Recent',
        role: 'Executive Producer',
        context:
            'A cross-border narrative production requiring a dependable India production structure while aligning with overseas production expectations.',
        challenge:
            'Permits, customs clearance, crew movement and multi-location scheduling all had to stay tightly coordinated under delivery pressure.',
        outcome:
            'The production moved with stronger control on the ground, protecting schedule confidence and keeping the unit operationally stable.',
    },
    {
        title: 'UK Streaming Campaign',
        format: 'Streaming Campaign',
        territory: 'Europe x India',
        year: 'Recent',
        role: 'Line Producer',
        context:
            'A European campaign needed an India production layer that felt polished, responsive and easy for an overseas team to work through.',
        challenge:
            'Visas, carnet handling, field logistics and on-ground delivery all needed to connect cleanly without slowing agency or client approvals.',
        outcome:
            'The India execution became easier to review, easier to manage and more dependable for the commissioning team through delivery and handover.',
    },
    {
        title: 'International Documentary Unit',
        format: 'Documentary',
        territory: 'International',
        year: 'Recent',
        role: 'Production Facilitation',
        context:
            'A documentary team was working across sensitive locations and needed discreet local production support without unnecessary operational noise.',
        challenge:
            'Remote approvals, cross-border crew movement and field logistics had to be handled carefully while preserving flexibility in the field.',
        outcome:
            'The unit was able to keep filming with better local coordination, clearer approvals and less friction around sensitive practical decisions.',
    },
    {
        title: 'Premium Brand Film',
        format: 'Commercial / Brand Film',
        territory: 'India',
        year: 'Recent',
        role: 'Production Management',
        context:
            'A premium-facing brand film required a production setup where finish, control and client-facing confidence mattered as much as speed.',
        challenge:
            'Equipment flow, premium locations and day-to-day production management had to stay smooth while protecting the visual standard of the job.',
        outcome:
            'The production retained a higher-touch finish on set, helping the team execute with more control and a calmer client experience.',
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
    const customersCarouselRef = useRef<HTMLDivElement | null>(null)
    const btsCarouselRef = useRef<HTMLDivElement | null>(null)
    const [activeWorkRegion, setActiveWorkRegion] = useState<'International Work' | 'Indian Work'>('International Work')

    const scrollCarousel = (ref: { current: HTMLDivElement | null }, direction: 'left' | 'right') => {
        const container = ref.current
        if (!container) return

        const amount = Math.max(container.clientWidth * 0.72, 220)
        container.scrollBy({
            left: direction === 'right' ? amount : -amount,
            behavior: 'smooth',
        })
    }

    const visibleWorkGroups = workVideoGroups.filter((group) => group.region === activeWorkRegion)

    return (
        <div className="space-y-10">
            <section id="about" className="rounded-[2.9rem] border border-[var(--border-soft)] bg-[linear-gradient(145deg,rgba(255,255,255,0.86),rgba(247,241,232,0.96))] p-8 shadow-[0_30px_80px_rgba(16,24,38,0.08)] sm:p-10 lg:p-14">
                <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white/88 px-4 py-2 text-[var(--surface-panel)]">
                            <Compass size={16} />
                            <p className="text-sm uppercase tracking-[0.34em] text-[var(--accent-gold)]">Positioning</p>
                        </div>
                        <h2 className="max-w-4xl text-4xl text-[var(--surface-strong)] sm:text-5xl">
                            A calm, client-facing production presence built to meet British and international expectations.
                        </h2>
                        <p className="max-w-3xl text-lg leading-9 text-[var(--text-soft)]">
                            I translate complex shooting conditions into a disciplined, credible and visually coherent production operation for UK and European collaborators working in India.
                        </p>
                    </div>

                    <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[rgba(19,35,60,0.96)] p-7 text-white shadow-[0_22px_54px_rgba(16,24,38,0.16)]">
                        <p className="text-xs uppercase tracking-[0.3em] text-[rgba(255,224,184,0.74)]">Approach</p>
                        <div className="mt-5 space-y-5">
                            <div>
                                <p className="text-sm text-white/68">Visual sensitivity</p>
                                <p className="mt-2 text-lg font-semibold text-white">Production structure with creative priority</p>
                            </div>
                            <div>
                                <p className="text-sm text-white/68">Operational discipline</p>
                                <p className="mt-2 text-lg font-semibold text-white">Permits, customs, crews and schedules handled without unnecessary drama</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
                <div className="rounded-[2.5rem] border border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(19,35,60,0.98),rgba(21,29,42,0.96))] p-8 text-white shadow-[0_28px_72px_rgba(16,24,38,0.16)] sm:p-10">
                    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-white">
                        <Sparkles size={16} />
                        <p className="text-sm uppercase tracking-[0.34em] text-[rgba(255,224,184,0.76)]">Services</p>
                    </div>
                    <h2 className="mt-5 text-4xl sm:text-5xl">
                        Production support that remains composed in front of demanding clients.
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-white/80">
                        Executive production and line production for international shoots that require polish, pace and operational control.
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
                                        ? 'linear-gradient(160deg, rgba(255, 255, 255, 0.94), rgba(242, 236, 227, 0.94))'
                                        : index % 3 === 1
                                            ? 'linear-gradient(160deg, rgba(248, 244, 236, 0.94), rgba(236, 232, 224, 0.94))'
                                            : 'linear-gradient(160deg, rgba(251, 247, 240, 0.94), rgba(237, 229, 217, 0.94))',
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

            <section id="portfolio" className="rounded-[2.9rem] border border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,244,238,0.92))] p-8 shadow-[0_26px_60px_rgba(16,24,38,0.06)] sm:p-10 lg:p-14">
                <div className="flex flex-col gap-4">
                    <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white/85 px-4 py-2 text-[var(--surface-panel)]">
                        <Orbit size={16} />
                        <p className="text-sm uppercase tracking-[0.34em] text-[var(--accent-gold)]">Portfolio</p>
                    </div>
                    <h2 className="text-4xl text-[var(--surface-strong)] sm:text-5xl">
                        A portfolio organised the way a commissioning team expects to review it.
                    </h2>
                    <p className="max-w-3xl text-lg leading-8 text-[var(--text-soft)]">
                        A concise view of the production strengths, operational systems and local execution experience behind international shoots.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    {workCategoryGroups.map((group, index) => (
                        <div
                            key={group.title}
                            className="rounded-[2rem] border p-7 sm:p-8"
                            style={{
                                borderColor: 'rgba(21, 28, 52, 0.12)',
                                background:
                                    index === 0
                                        ? 'linear-gradient(160deg, rgba(248, 244, 238, 0.96), rgba(255, 255, 255, 0.92))'
                                        : 'linear-gradient(160deg, rgba(242, 237, 231, 0.96), rgba(255, 255, 255, 0.92))',
                            }}
                        >
                            <p className="text-sm uppercase tracking-[0.28em] text-[var(--text-dim)]">Portfolio</p>
                            <h3 className="mt-4 text-2xl font-semibold text-[var(--surface-strong)]">{group.title}</h3>
                            <div className="mt-6 grid gap-3">
                                {group.items.map((item, itemIndex) => (
                                    <div
                                        key={item}
                                        className="rounded-[1.2rem] border border-white/50 bg-white/55 px-4 py-3 text-[var(--surface-strong)]"
                                    >
                                        <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-dim)]">
                                            0{itemIndex + 1}
                                        </p>
                                        <p className="mt-2 text-lg font-semibold">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="work" className="rounded-[2.9rem] border border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(250,246,239,0.96),rgba(243,236,226,0.98))] p-8 text-[var(--surface-strong)] shadow-[0_32px_84px_rgba(16,24,38,0.08)] sm:p-10 lg:p-14">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white/85 px-4 py-2 text-[var(--surface-panel)]">
                            <Camera size={16} />
                            <p className="text-sm uppercase tracking-[0.34em] text-[var(--accent-gold)]">Work</p>
                        </div>
                        <h2 className="text-4xl sm:text-5xl text-[var(--surface-strong)]">
                            Selected work presented in a cleaner review format.
                        </h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-[var(--text-soft)]">
                        Organised by territory and format so producers, agencies and commissioners can review projects quickly.
                    </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                    {workCategoryGroups.map((group) => (
                        <button
                            key={group.title}
                            type="button"
                            onClick={() => setActiveWorkRegion(group.title as 'International Work' | 'Indian Work')}
                            className={`rounded-full border px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] transition ${
                                activeWorkRegion === group.title
                                    ? 'border-[var(--surface-strong)] bg-[var(--surface-strong)] text-white shadow-[0_16px_36px_rgba(16,24,38,0.14)]'
                                    : 'border-[var(--border-soft)] bg-white/85 text-[var(--surface-strong)] hover:bg-white'
                            }`}
                        >
                            {group.title}
                        </button>
                    ))}
                </div>

                <div className="mt-10 grid gap-6">
                    {visibleWorkGroups.map((group, groupIndex) => (
                        <article
                            key={group.id}
                            className="rounded-[2rem] border border-[var(--border-soft)] p-6 shadow-[0_16px_36px_rgba(16,24,38,0.08)] sm:p-7"
                            style={{
                                background:
                                    groupIndex === 0
                                        ? 'linear-gradient(165deg, rgba(255,255,255,0.92), rgba(245,239,230,0.92))'
                                        : 'linear-gradient(165deg, rgba(252,248,242,0.94), rgba(240,233,223,0.94))',
                            }}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.28em] text-[var(--text-dim)]">Work Group</p>
                                    <h3 className="mt-3 text-2xl font-semibold text-[var(--surface-strong)]">{group.title}</h3>
                                </div>
                                <div className="rounded-full border border-[var(--border-soft)] bg-white/76 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--text-dim)]">
                                    {group.videos.length} reels
                                </div>
                            </div>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                                {workCategoryGroups
                                    .find((categoryGroup) => categoryGroup.title === group.region)
                                    ?.items.map((item, itemIndex) => (
                                    <div
                                        key={item}
                                        className="rounded-[1.1rem] border border-[rgba(16,24,38,0.08)] bg-white/68 px-4 py-3"
                                    >
                                        <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-dim)]">
                                            0{itemIndex + 1}
                                        </p>
                                        <p className="mt-2 text-lg font-semibold text-[var(--surface-strong)]">{item}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {group.videos.map((video, videoIndex) => (
                                    <div
                                        key={video.id}
                                        className="overflow-hidden rounded-[1.25rem] border border-white/8 bg-white/78 text-left transition hover:-translate-y-1"
                                    >
                                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                                            {videoIndex === 0 ? (
                                                <LazyAutoplayVideoFrame
                                                    title={video.title}
                                                    embedUrl={video.embedUrl}
                                                    poster={video.poster}
                                                    controls={false}
                                                    loading="eager"
                                                />
                                            ) : (
                                                <img
                                                    className="h-full w-full object-cover"
                                                    src={video.poster}
                                                    alt={video.title}
                                                    loading="lazy"
                                                />
                                            )}
                                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01)_24%,rgba(0,0,0,0.12)_62%,rgba(0,0,0,0.28))]" />
                                            <div className="pointer-events-none absolute inset-x-3 top-3 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-white/84">
                                                <span className="rounded-full border border-white/16 bg-black/34 px-2 py-1">{video.accent}</span>
                                                <span className="rounded-full border border-white/16 bg-black/34 px-2 py-1 text-[9px] tracking-[0.18em] text-white/72">
                                                    {videoIndex === 0 ? 'Live' : 'Preview'}
                                                </span>
                                            </div>
                                            {videoIndex !== 0 ? (
                                                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/34 bg-black/42 text-[10px] uppercase tracking-[0.2em] text-white">
                                                        Play
                                                    </span>
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="px-4 py-4">
                                            <p className="text-sm font-semibold text-[var(--surface-strong)]">{video.title}</p>
                                            <div className="mt-4">
                                                <a
                                                    href={video.watchUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex rounded-full border border-slate-900/12 bg-slate-950 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-slate-800"
                                                >
                                                    Open on YouTube
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

            </section>

            <section id="behind-the-scenes" className="rounded-[2.9rem] border border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,238,229,0.96))] p-8 shadow-[0_26px_60px_rgba(16,24,38,0.06)] sm:p-10 lg:p-14">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white/85 px-4 py-2 text-[var(--surface-panel)]">
                            <Camera size={16} />
                            <p className="text-sm uppercase tracking-[0.34em] text-[var(--accent-gold)]">Behind the Scenes</p>
                        </div>
                        <h2 className="text-4xl text-[var(--surface-strong)] sm:text-5xl">
                            On-set stills from live productions.
                        </h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-[var(--text-soft)]">
                        A lighter visual strip of field stills, giving context to the reels without crowding the main work presentation.
                    </p>
                </div>

                <div className="mt-10 rounded-[2rem] border border-[var(--border-soft)] bg-white/72 p-4 shadow-[0_18px_40px_rgba(66,76,119,0.06)] sm:p-5">
                    <div className="mb-4 flex items-center justify-end gap-3">
                        <button
                            type="button"
                            onClick={() => scrollCarousel(btsCarouselRef, 'left')}
                            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white/80 text-[var(--surface-strong)] shadow-[0_14px_30px_rgba(66,76,119,0.12)] transition hover:scale-105 hover:bg-white sm:h-11 sm:w-11"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollCarousel(btsCarouselRef, 'right')}
                            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white/80 text-[var(--surface-strong)] shadow-[0_14px_30px_rgba(66,76,119,0.12)] transition hover:scale-105 hover:bg-white sm:h-11 sm:w-11"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>

                    <div
                        ref={btsCarouselRef}
                        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {behindTheScenesStills.map((stillSrc) => (
                            <figure
                                key={stillSrc}
                                className="group min-w-[9.75rem] shrink-0 snap-start overflow-hidden rounded-[1.3rem] border border-[var(--border-soft)] bg-white/72 shadow-[0_12px_28px_rgba(66,76,119,0.06)] transition duration-300 hover:z-10 hover:scale-[1.18] hover:shadow-[0_26px_54px_rgba(66,76,119,0.18)] sm:min-w-[11rem] lg:min-w-[12rem]"
                            >
                                <img
                                    src={stillSrc}
                                    alt="Behind-the-scenes production still"
                                    className="h-28 w-full object-cover transition duration-300 group-hover:scale-[1.08] sm:h-32 lg:h-36"
                                    loading="lazy"
                                />
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            <section id="case-studies" className="rounded-[2.9rem] border border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,244,238,0.94))] p-8 shadow-[0_26px_60px_rgba(16,24,38,0.06)] sm:p-10 lg:p-14">
                <div className="flex flex-col gap-4">
                    <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white/85 px-4 py-2 text-[var(--surface-panel)]">
                        <Orbit size={16} />
                        <p className="text-sm uppercase tracking-[0.34em] text-[var(--accent-gold)]">Case studies</p>
                    </div>
                    <h2 className="text-4xl text-[var(--surface-strong)] sm:text-5xl">
                        Selected projects with genuine operational weight.
                    </h2>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    {works.map((work, index) => (
                        <article
                            key={work.title}
                            className="overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-white/82 shadow-[0_18px_36px_rgba(16,24,38,0.06)]"
                        >
                            <div
                                className="px-7 pb-6 pt-7 sm:px-8"
                                style={{
                                    background:
                                        index % 2 === 0
                                            ? 'linear-gradient(145deg, rgba(19,35,60,0.96), rgba(51,83,122,0.88))'
                                            : 'linear-gradient(145deg, rgba(92,54,32,0.96), rgba(166,116,72,0.88))',
                                }}
                            >
                                <div className="flex items-start justify-between gap-4 text-white">
                                    <div>
                                        <p className="text-[11px] uppercase tracking-[0.26em] text-white/68">
                                            {work.format} · {work.territory}
                                        </p>
                                        <h3 className="mt-3 text-2xl font-semibold">{work.title}</h3>
                                        <p className="mt-3 max-w-xl text-sm leading-7 text-white/76">
                                            {work.context}
                                        </p>
                                    </div>
                                    <div className="rounded-full border border-white/14 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/78">
                                        {work.year}
                                    </div>
                                </div>
                            </div>
                            <div className="grid gap-4 p-7 sm:grid-cols-3 sm:p-8">
                                <div className="rounded-[1.35rem] border border-[var(--border-soft)] bg-[rgba(247,241,232,0.72)] p-5">
                                    <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-dim)]">Role</p>
                                    <p className="mt-3 text-base font-semibold text-[var(--surface-strong)]">{work.role}</p>
                                </div>
                                <div className="rounded-[1.35rem] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.82)] p-5 sm:col-span-2">
                                    <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-dim)]">Production Challenge</p>
                                    <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{work.challenge}</p>
                                </div>
                                <div className="rounded-[1.35rem] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.82)] p-5 sm:col-span-3">
                                    <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-dim)]">Outcome</p>
                                    <p className="mt-3 text-sm leading-7 text-[var(--surface-strong)]">{work.outcome}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section id="testimonials" className="rounded-[2.9rem] border border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(242,237,231,0.96))] p-8 shadow-[0_26px_60px_rgba(16,24,38,0.06)] sm:p-10 lg:p-14">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white/85 px-4 py-2 text-[var(--surface-panel)]">
                        <Camera size={16} />
                        <p className="text-sm uppercase tracking-[0.34em] text-[var(--accent-gold)]">Testimonials</p>
                    </div>
                    <h2 className="text-4xl text-[var(--surface-strong)] sm:text-5xl">
                        Trusted when the work is creatively ambitious and operationally exposed.
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

            <section id="network-collaborations" className="rounded-[2.9rem] border border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(19,35,60,0.98),rgba(30,34,43,0.96))] p-8 text-white shadow-[0_32px_84px_rgba(16,24,38,0.16)] sm:p-10 lg:p-14">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-white">
                            <Orbit size={16} />
                            <p className="text-sm uppercase tracking-[0.34em] text-[rgba(255,224,184,0.76)]">Network Collaborations</p>
                        </div>
                        <h2 className="text-4xl sm:text-5xl">
                            Collaborations across brands, studios and campaigns.
                        </h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-white/76">
                        A compact logo wall showing the network of production collaborations without overwhelming the page.
                    </p>
                </div>

                <div className="mt-10 rounded-[2rem] border border-[var(--border-soft)] bg-white/52 p-4 shadow-[0_18px_40px_rgba(66,76,119,0.06)] sm:p-5">
                    <div className="mb-4 flex items-center justify-end gap-3">
                        <button
                            type="button"
                            onClick={() => scrollCarousel(customersCarouselRef, 'left')}
                            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white/80 text-[var(--surface-strong)] shadow-[0_14px_30px_rgba(66,76,119,0.12)] transition hover:scale-105 hover:bg-white sm:h-11 sm:w-11"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollCarousel(customersCarouselRef, 'right')}
                            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white/80 text-[var(--surface-strong)] shadow-[0_14px_30px_rgba(66,76,119,0.12)] transition hover:scale-105 hover:bg-white sm:h-11 sm:w-11"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>

                    <div
                        ref={customersCarouselRef}
                        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {partnerLogos.map((logoSrc, index) => (
                            <div
                                key={logoSrc}
                                className="group relative flex min-h-20 min-w-[9.5rem] shrink-0 snap-start items-center justify-center rounded-[1.2rem] border border-[var(--border-soft)] bg-white/62 p-3 transition duration-300 hover:z-10 hover:scale-[1.24] hover:bg-white/92 hover:shadow-[0_24px_54px_rgba(66,76,119,0.18)] sm:min-w-[10.5rem]"
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
                                        className="max-h-9 w-full object-contain opacity-95 transition duration-300 group-hover:scale-[1.3]"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="rounded-[2.9rem] border border-[var(--border-soft)] bg-[linear-gradient(155deg,rgba(255,255,255,0.92),rgba(247,241,232,0.98))] p-8 shadow-[0_26px_60px_rgba(16,24,38,0.08)] sm:p-10 lg:p-14">
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white/85 px-4 py-2 text-[var(--surface-panel)]">
                            <Compass size={16} />
                            <p className="text-sm uppercase tracking-[0.34em] text-[var(--accent-gold)]">Contact</p>
                        </div>
                        <h2 className="text-4xl text-[var(--surface-strong)] sm:text-5xl">
                            Let’s discuss the next UK-India production.
                        </h2>
                    <p className="max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                            Get in touch to discuss a CV, a showreel, or a practical conversation about filming in India, incentives, permits and remote production support.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        <div className="rounded-[1.8rem] border border-[var(--border-soft)] bg-white/72 p-6">
                            <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-dim)]">Email</p>
                            <p className="mt-3 text-xl font-semibold text-[var(--surface-strong)]">swarpfilms@gmail.com</p>
                        </div>
                        <div className="rounded-[1.8rem] border border-[var(--border-soft)] bg-white/72 p-6">
                            <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-dim)]">WhatsApp</p>
                            <p className="mt-3 text-xl font-semibold text-[var(--surface-strong)]">+91 91047 43013</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
