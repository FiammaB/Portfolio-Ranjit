import { useEffect, useRef, useState } from 'react'
import { Camera, ChevronLeft, ChevronRight, Compass, Orbit, Sparkles, X } from 'lucide-react'
import LazyAutoplayVideoFrame from './LazyAutoplayVideoFrame'
import { testimonials, workCategoryGroups, workVideoGroups } from '../content/siteContent'

const dunkiPoster = new URL('../data/Case Studies-20260604T182810Z-3-001/Case Studies/Films/Overseas/Dunki-2/Poster-optimized.jpg', import.meta.url).href
const ganapathPoster = new URL('../data/Film posters/Feature Films/Ganapath.jpg', import.meta.url).href
const gangsterGangaPoster = new URL('../data/Case Studies-20260604T182810Z-3-001/Case Studies/Films/India/Gangster Ganga-2/poster.jpeg', import.meta.url).href
const ittaaKittaaPoster = new URL('../data/Case Studies-20260604T182810Z-3-001/Case Studies/Films/India/Ittaa Kittaa-1/poster.jpeg', import.meta.url).href
const theRoshansPoster = new URL('../data/Case Studies-20260604T182810Z-3-001/Case Studies/Streaming Series/The Roshans-1/poster.jpeg', import.meta.url).href

const dunkiDetailPoster = new URL('../data/Case Studies-20260604T182810Z-3-001/Case Studies/Films/Overseas/Dunki-2/Poster-optimized.jpg', import.meta.url).href
const ganapathDetailPoster = new URL('../data/Film posters/Feature Films/Ganapath.jpg', import.meta.url).href
const gangsterGangaDetailPoster = new URL('../data/Film Details-20260604T182815Z-3-001/Film Details/Feature Films/Gangster Ganga - 2/poster.jpeg', import.meta.url).href
const ittaaKittaaDetailPoster = new URL('../data/Film Details-20260604T182815Z-3-001/Film Details/Feature Films/Ittaa Kittaa - 3/poster.jpeg', import.meta.url).href
const theRoshansDetailPoster = new URL('../data/Film Details-20260604T182815Z-3-001/Film Details/Streaming Series/The Roshans-1/poster.jpeg', import.meta.url).href

const dunkiCaseStudyDocUrl = new URL('../data/Case Studies-20260604T182810Z-3-001/Case Studies/Films/Overseas/Dunki-2/Dunki (case study).docx', import.meta.url).href
const ganapathCaseStudyDocUrl = new URL('../data/Case Studies-20260604T182810Z-3-001/Case Studies/Films/Overseas/Ganapath-3/Ganapath (case study).docx', import.meta.url).href
const gangsterGangaCaseStudyDocUrl = new URL('../data/Case Studies-20260604T182810Z-3-001/Case Studies/Films/India/Gangster Ganga-2/CASE STUDY.docx', import.meta.url).href
const ittaaKittaaCaseStudyDocUrl = new URL('../data/Case Studies-20260604T182810Z-3-001/Case Studies/Films/India/Ittaa Kittaa-1/Case Study.docx', import.meta.url).href
const theRoshansCaseStudyDocUrl = new URL('../data/Case Studies-20260604T182810Z-3-001/Case Studies/Streaming Series/The Roshans-1/The Roshans (case study).docx', import.meta.url).href

const dunkiFilmDetailsDocUrl = new URL('../data/Film Details-20260604T182815Z-3-001/Film Details/Feature Films/Dunki - 4/Description.docx', import.meta.url).href
const ganapathFilmDetailsDocUrl = new URL('../data/Film Details-20260604T182815Z-3-001/Film Details/Feature Films/Ganapath-5/Description.docx', import.meta.url).href
const gangsterGangaFilmDetailsDocUrl = new URL('../data/Film Details-20260604T182815Z-3-001/Film Details/Feature Films/Gangster Ganga - 2/Description.docx', import.meta.url).href
const ittaaKittaaFilmDetailsDocUrl = new URL('../data/Film Details-20260604T182815Z-3-001/Film Details/Feature Films/Ittaa Kittaa - 3/Description.docx', import.meta.url).href
const theRoshansFilmDetailsDocUrl = new URL('../data/Film Details-20260604T182815Z-3-001/Film Details/Streaming Series/The Roshans-1/Description.docx', import.meta.url).href

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

const aboutHighlights = [
    '21+ years across domestic and international production markets',
    '30+ feature films across theatrical and streaming platforms',
    '70+ commercial campaigns for global brands',
    'Zero major permit or compliance failures across two decades',
]

const aboutFocusAreas = [
    'Feature films',
    'Streaming series',
    'Commercials',
    'Documentaries',
    'Music videos',
    'International co-productions',
]

const portfolioReviewSteps = [
    {
        title: 'Reels',
        text: 'Commercials and music videos are presented as a quick visual review, not as long written case studies.',
    },
    {
        title: 'Case Studies',
        text: 'Only selected flagship projects are expanded in detail for film, streaming and major production work.',
    },
    {
        title: 'Contact',
        text: 'The site is designed to move serious enquiries toward a direct conversation, not to overwhelm with too much text.',
    },
]

const works = [
    {
        title: 'Dunki',
        format: 'Feature Film',
        territory: 'India / UK / Hungary',
        year: '2023',
        role: 'Line Producer',
        image: dunkiPoster,
        supportingImage: dunkiDetailPoster,
        caseStudyDocUrl: dunkiCaseStudyDocUrl,
        filmDetailsDocUrl: dunkiFilmDetailsDocUrl,
        context:
            'A multi-territory Hindi feature spanning Mumbai, Budapest and London, delivered against a fixed theatrical release schedule with significant immigration, logistics and budget pressure across the European leg.',
        challenge:
            'UK and Hungarian visas, cross-border crew movement, compliance, local authority coordination and multi-currency cost control all had to stay aligned without compromising schedule continuity.',
        outcome:
            'The European schedule was delivered with production continuity protected, immigration issues absorbed operationally and cost discipline maintained across a complex international shoot.',
        details: {
            overview:
                'A major Hindi feature spanning Mumbai, Budapest and London, with the European leg requiring tightly coordinated immigration planning, local authority liaison and budget control under a fixed release timeline.',
            credits: [
                'Director: Rajkumar Hirani',
                'Production Partners: Red Chillies Entertainment / Rajkumar Hirani Films',
                'Format: Hindi Feature Film',
                'Release Year: 2023',
                'Role Scope: Mumbai and Budapest production leadership',
            ],
            responsibilities: [
                'Managed operational planning across the Mumbai and Budapest production blocks.',
                'Coordinated visa documentation, submission timing and cross-border crew movement for the UK and Hungary schedules.',
                'Supported cost control, multi-currency spend management and local partner coordination during the European leg.',
                'Maintained communication across production, logistics, immigration and vendor teams to protect schedule continuity.',
            ],
            impactPoints: [
                'Protected the consolidated European schedule despite visa refusals and live immigration pressure.',
                'Maintained production continuity across multiple territories under a fixed release deadline.',
                'Supported disciplined execution across logistics, compliance and financial control on a large-scale feature.',
            ],
        },
    },
    {
        title: 'Ganapath',
        format: 'Feature Film',
        territory: 'United Kingdom / India',
        year: '2023',
        role: 'Line Producer (UK)',
        image: ganapathPoster,
        supportingImage: ganapathDetailPoster,
        caseStudyDocUrl: ganapathCaseStudyDocUrl,
        filmDetailsDocUrl: ganapathFilmDetailsDocUrl,
        context:
            'A large-scale Hindi action feature requiring the full UK production leg to be built and managed locally across crew, permits, logistics, visas and compliance.',
        challenge:
            'The UK schedule had to function without a local production service partner, which meant permissions, HSE documentation, Working Time compliance and incoming Indian crew logistics all needed to be handled directly.',
        outcome:
            'The UK block was executed on schedule with local crew, permits, safety paperwork and operational support in place for a major theatrical production.',
        details: {
            overview:
                'A large-scale Hindi action feature where the UK leg required end-to-end local production control across crew, permits, visas, logistics and compliance, without a British production service partner in place.',
            credits: [
                'Director: Vikas Bahl',
                'Production Partners: Pooja Entertainment / Good Co.',
                'Format: Hindi Feature Film',
                'Release Year: 2023',
                'Role Scope: United Kingdom line production',
            ],
            responsibilities: [
                'Built and managed the UK production infrastructure across crew, vendors and logistics.',
                'Handled UKVI applications and incoming Indian crew movement against a locked shoot schedule.',
                'Secured location permissions, civic liaison and public-environment production approvals.',
                'Produced HSE documentation and maintained Working Time Regulations compliance for the UK crew.',
            ],
            impactPoints: [
                'Delivered the complete UK production block on schedule for a major theatrical release.',
                'Maintained compliance across permits, safety documentation and labour obligations.',
                'Provided a single point of operational control across a complex UK schedule.',
            ],
        },
    },
    {
        title: 'Gangster Ganga',
        format: 'Short-Format OTT Film',
        territory: 'JioHotstar / Hotstar',
        year: '2023',
        role: 'Executive Producer',
        image: gangsterGangaPoster,
        supportingImage: gangsterGangaDetailPoster,
        caseStudyDocUrl: gangsterGangaCaseStudyDocUrl,
        filmDetailsDocUrl: gangsterGangaFilmDetailsDocUrl,
        context:
            'A Hindi OTT release featuring Supriya Pathak and Veer Rajwant Singh, delivered through a tightly controlled production structure for streaming release.',
        challenge:
            'Short-format OTT production left very little room for inefficiency, so scheduling, departmental coordination, technical consistency and the handoff into post-production all needed to stay tightly controlled.',
        outcome:
            'Delivered a completed film for JioHotstar with structured production oversight, smoother workflow continuity and the technical discipline needed for a polished OTT release.',
        details: {
            overview:
                'Released on JioHotstar in 2023, the film demanded the pace and control of a larger commercial production despite its compressed runtime. The brief was to maintain streaming-ready presentation quality, workflow discipline and technical consistency from active production through final delivery.',
            credits: [
                'Director: Sahil Rakesh Grover',
                'Producer: Vikas Agarwal',
                'Director of Photography: Ashwin Kadamboor',
                'Language: Hindi',
                'Estimated Budget: INR 1 crore',
            ],
            responsibilities: [
                'Oversaw the operational framework across planning, execution, coordination and final delivery.',
                'Maintained scheduling oversight and production continuity throughout the shoot.',
                'Coordinated practical production requirements across departments and protected workflow efficiency.',
                'Supported resource planning, logistics management and continuity between production and post-production.',
            ],
            impactPoints: [
                'Maintained production stability and improved coordination efficiency under a restricted schedule.',
                'Protected delivery timelines while preserving OTT-ready technical and presentation standards.',
                'Supported a smoother transition into post-production through clearer operational alignment.',
            ],
        },
    },
    {
        title: 'Ittaa Kittaa',
        format: 'Feature Film',
        territory: 'Gujarat / India',
        year: '2024',
        role: 'Head of Production',
        image: ittaaKittaaPoster,
        supportingImage: ittaaKittaaDetailPoster,
        caseStudyDocUrl: ittaaKittaaCaseStudyDocUrl,
        filmDetailsDocUrl: ittaaKittaaFilmDetailsDocUrl,
        context:
            'A Gujarati feature delivered through a three-partner production structure, combining theatrical release requirements with later platform delivery expectations.',
        challenge:
            'Co-production alignment, multi-location Gujarat logistics, location permissions, crew integration and platform-ready post-production had to be managed within a tightly controlled budget.',
        outcome:
            'The film was delivered for theatrical release with operational control across production partners, clearer departmental coordination and structured delivery through post.',
        details: {
            overview:
                'A Gujarati feature managed across a three-partner production structure, combining theatrical delivery requirements with later platform release expectations and multi-location execution in Gujarat.',
            credits: [
                'Directors: Abhinn Sharma / Manthan Purohit',
                'Production Partners: Janvi Productions / Gayatri Productions / Jio Studios',
                'Format: Gujarati Feature Film',
                'Release Year: 2024',
                'Role Scope: Head of Production',
            ],
            responsibilities: [
                'Led pre-production planning, budgeting and scheduling across the full project lifecycle.',
                'Managed location permitting, municipal liaison and site-specific production readiness across Gujarat.',
                'Coordinated production partner alignment, crew structure and departmental accountability.',
                'Integrated post-production and delivery requirements for theatrical and platform release.',
            ],
            impactPoints: [
                'Delivered a multi-stakeholder regional feature with structured operational control.',
                'Protected delivery timelines across production, post and release planning.',
                'Maintained clearer partner coordination across a layered co-production setup.',
            ],
        },
    },
    {
        title: 'The Roshans',
        format: 'Docu-Series',
        territory: 'Netflix / Global',
        year: '2025',
        role: 'Executive Producer',
        image: theRoshansPoster,
        supportingImage: theRoshansDetailPoster,
        caseStudyDocUrl: theRoshansCaseStudyDocUrl,
        filmDetailsDocUrl: theRoshansFilmDetailsDocUrl,
        context:
            'A four-part Netflix docu-series built around archival material, senior industry contributors and a fixed global release date.',
        challenge:
            'Archival rights, contributor access, insurance, technical delivery and platform compliance all needed to be managed across a year-long production cycle.',
        outcome:
            'The series reached global release with rights, access, compliance and delivery workflows held together within a lean production model.',
        details: {
            overview:
                'A four-part Netflix docu-series requiring year-long executive oversight across archival clearances, contributor access, insurance structures and platform delivery for a fixed global release.',
            credits: [
                'Producer: Roshan Creations',
                'Platform: Netflix',
                'Format: Four-part Docu-Series',
                'Release Year: 2025',
                'Role Scope: Executive Producer',
            ],
            responsibilities: [
                'Oversaw the project from pre-production through post-production and final platform delivery.',
                'Structured archival rights and asset management workflows across multiple rights holders.',
                'Managed contributor access, scheduling and production risk around high-profile interview subjects.',
                'Coordinated insurance, technical compliance and delivery planning for a global streaming release.',
            ],
            impactPoints: [
                'Held together rights, access and compliance workflows across a long production cycle.',
                'Delivered a structured path to global platform release under a fixed deadline.',
                'Maintained control across legal, editorial and operational risk within a lean production model.',
            ],
        },
    },
]

const partnerLogos = [
    'partner-logo-01.png',
    'partner-logo-02.png',
    'partner-logo-03.webp',
    'partner-logo-04.png',
    'partner-logo-05.png',
    'partner-logo-06.png',
    'partner-logo-07.png',
    'partner-logo-08.png',
    'partner-logo-09.png',
    'partner-logo-10.webp',
    'partner-logo-11.webp',
    'partner-logo-12.png',
    'partner-logo-13.png',
    'partner-logo-14.avif',
].map((fileName) => `/company-logos/Company Logos/${fileName}`)

const darkLogoBackgrounds = new Set([
    '/company-logos/Company Logos/partner-logo-13.png',
    '/company-logos/Company Logos/partner-logo-14.avif',
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
    const [activeWorkVideos, setActiveWorkVideos] = useState<Record<string, string>>(() =>
        Object.fromEntries(workVideoGroups.map((group) => [group.id, group.videos[0]?.id ?? ''])),
    )
    const [expandedWorks, setExpandedWorks] = useState<string[]>([])
    const [isAboutExpanded, setIsAboutExpanded] = useState(false)
    const [activeCaseStudy, setActiveCaseStudy] = useState<(typeof works)[number] | null>(null)

    useEffect(() => {
        if (!activeCaseStudy) return

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setActiveCaseStudy(null)
            }
        }

        const originalOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = originalOverflow
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [activeCaseStudy])

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
    const toggleExpandedWork = (title: string) => {
        setExpandedWorks((current) =>
            current.includes(title) ? current.filter((item) => item !== title) : [...current, title],
        )
    }

    return (
        <div className="space-y-10">
            <section id="about" className="rounded-[2.9rem] border border-[var(--border-soft)] bg-[linear-gradient(145deg,rgba(255,255,255,0.88),rgba(247,241,232,0.98))] p-8 shadow-[0_30px_80px_rgba(16,24,38,0.08)] sm:p-10 lg:p-14">
                <div className="grid gap-8 xl:grid-cols-[minmax(0,1.15fr)_22rem] xl:items-start">
                    <div className="space-y-7">
                        <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white/88 px-4 py-2 text-[var(--surface-panel)]">
                            <Compass size={16} />
                            <p className="text-sm uppercase tracking-[0.34em] text-[var(--accent-gold)]">Positioning</p>
                        </div>
                        <h2 className="max-w-5xl text-4xl text-[var(--surface-strong)] sm:text-5xl lg:text-[3.8rem] lg:leading-[1.03]">
                            Based in Mumbai, delivering complex productions across India and international markets with calm operational control.
                        </h2>
                        <div className="max-w-4xl space-y-5">
                        <p className="text-lg leading-9 text-[var(--text-soft)]">
                            Over more than two decades, I have managed feature films, streaming series, commercials, documentaries, branded content, music videos and international production services with strategic oversight, financial discipline and precise execution.
                        </p>
                        <p className="text-base leading-8 text-[var(--text-soft)] sm:text-[1.05rem]">
                            I specialise in high-pressure productions where schedules evolve rapidly, logistics intensify and multicultural teams need to stay aligned from development through final delivery. The focus stays on clarity, efficiency and commercially dependable delivery.
                        </p>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                            {aboutHighlights.map((highlight) => (
                                <div
                                    key={highlight}
                                    className="rounded-[1.35rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,244,238,0.82))] px-5 py-5 text-sm leading-6 text-[var(--surface-strong)] shadow-[0_14px_30px_rgba(16,24,38,0.04)]"
                                >
                                    {highlight}
                                </div>
                            ))}
                        </div>
                        <div>
                            <button
                                type="button"
                                onClick={() => setIsAboutExpanded((current) => !current)}
                                className="inline-flex items-center rounded-full border border-[var(--surface-strong)] bg-[var(--surface-strong)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:opacity-90"
                            >
                                {isAboutExpanded ? 'Show less' : 'More about'}
                            </button>
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(19,35,60,0.98),rgba(28,37,52,0.96))] p-7 text-white shadow-[0_22px_54px_rgba(16,24,38,0.16)] xl:sticky xl:top-24">
                        <p className="text-xs uppercase tracking-[0.3em] text-[rgba(255,224,184,0.74)]">Focus</p>
                        <div className="mt-5 space-y-5">
                            <div>
                                <p className="text-sm text-white/68">Leadership approach</p>
                                <p className="mt-2 text-lg font-semibold text-white">Practical, solutions-led leadership under demanding production conditions</p>
                            </div>
                            <div>
                                <p className="text-sm text-white/68">Operational range</p>
                                <p className="mt-2 text-lg font-semibold text-white">Permits, customs, crews, logistics, compliance and cross-border delivery handled with control</p>
                            </div>
                            <div>
                                <p className="text-sm text-white/68">Industry focus</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {aboutFocusAreas.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-white/14 bg-white/8 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/78"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isAboutExpanded ? (
                    <div className="mt-12 space-y-6 border-t border-[rgba(16,24,38,0.08)] pt-10">
                        <div className="grid gap-6 xl:grid-cols-2">
                            <div className="rounded-[1.5rem] border border-[var(--border-soft)] bg-white/62 p-6">
                                <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-dim)]">Core strengths</p>
                                <div className="mt-4 grid gap-3 text-sm leading-7 text-[var(--text-soft)]">
                                    <p>Lead large-scale productions across culturally diverse and logistically demanding environments.</p>
                                    <p>Direct budgeting, scheduling, compliance, logistics, and production execution.</p>
                                    <p>Maintain trusted relationships with broadcasters, studios, agencies, brands, suppliers, and senior stakeholders.</p>
                                    <p>Resolve operational challenges while protecting schedules and commercial priorities.</p>
                                    <p>Coordinate overseas filming requirements, including visas, carnets, permits, customs procedures, and local crew integration.</p>
                                    <p>Structure international co-productions across Indian and overseas markets.</p>
                                    <p>Negotiate supplier agreements, licensing arrangements, and production service contracts.</p>
                                    <p>Maintain financial control through forecasting, reporting, reconciliation, and cost management.</p>
                                    <p>Strengthen efficiency through structured planning and streamlined operational systems.</p>
                                    <p>Guide teams through composed, practical, and accountable leadership.</p>
                                    <p>Maintain professional working environments built on respect, clarity, and teamwork.</p>
                                    <p>Apply environmentally responsible production practices aligned with international standards.</p>
                                    <p>Balance creative ambition with commercial accountability and practical execution.</p>
                                </div>
                            </div>
                            <div className="rounded-[1.5rem] border border-[var(--border-soft)] bg-white/62 p-6">
                                <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-dim)]">Key expertise</p>
                                <div className="mt-4 grid gap-3 text-sm leading-7 text-[var(--text-soft)]">
                                    <p>Deliver end-to-end line production across feature films, streaming projects, documentaries, commercials, branded campaigns, and music videos.</p>
                                    <p>Manage overseas production servicing for studios, broadcasters, agencies, and international partners.</p>
                                    <p>Oversee multi-location shoots and territory-specific production coordination.</p>
                                    <p>Secure locations, permits, clearances, and government approvals across multiple regions.</p>
                                    <p>Recruit and manage crew, technicians, suppliers, and support teams across domestic and international productions.</p>
                                    <p>Coordinate technical equipment, transport, accommodation, and production infrastructure.</p>
                                    <p>Prepare schedules, call sheets, logistics plans, and production documentation.</p>
                                    <p>Provide fixer services for foreign productions requiring regional guidance and local operational support.</p>
                                    <p>Handle freight movement, hospitality coordination, travel management, and cross-border equipment transportation.</p>
                                    <p>Supervise payroll administration, insurance documentation, contracts, and production compliance.</p>
                                    <p>Oversee post-production processes, including grading, VFX coordination, asset management, and final delivery.</p>
                                    <p>Produce reconciliation reports, production updates, and departmental communication.</p>
                                    <p>Ensure final deliverables meet UK and international technical standards.</p>
                                    <p>Advise production partners on planning, budgeting, scheduling, and operational feasibility.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-6 xl:grid-cols-2">
                            <div className="rounded-[1.5rem] border border-[var(--border-soft)] bg-white/62 p-6">
                                <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-dim)]">Leadership approach</p>
                                <div className="mt-4 grid gap-3 text-sm leading-7 text-[var(--text-soft)]">
                                    <p>Create stability within fast-paced and high-pressure productions.</p>
                                    <p>Maintain clear communication across creative, technical, and production teams.</p>
                                    <p>Encourage decisive problem-solving throughout all stages of production.</p>
                                    <p>Provide hands-on guidance that strengthens accountability and performance.</p>
                                    <p>Build adaptable teams capable of responding to evolving production demands.</p>
                                    <p>Lead multicultural crews with sensitivity towards regional practices and cultural dynamics.</p>
                                    <p>Introduce efficient methodologies and practical production systems.</p>
                                    <p>Maintain transparency across negotiations, planning, and resource allocation.</p>
                                    <p>Mentor emerging professionals and maintain long-term industry relationships.</p>
                                    <p>Uphold professionalism, integrity, and reliability throughout every stage of delivery.</p>
                                </div>
                            </div>
                            <div className="rounded-[1.5rem] border border-[var(--border-soft)] bg-white/62 p-6">
                                <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-dim)]">Production delivery</p>
                                <div className="mt-4 grid gap-3 text-sm leading-7 text-[var(--text-soft)]">
                                    <p>Execute productions within approved schedules and financial parameters while maintaining creative standards.</p>
                                    <p>Coordinate development, filming, post-production, and final delivery across multiple workstreams.</p>
                                    <p>Manage projects ranging from independent productions to large-scale international assignments with equal attention to detail.</p>
                                    <p>Oversee casting support, crewing, supplier coordination, contracts, and production operations across multiple territories.</p>
                                    <p>Deliver scalable production frameworks suited to both short-form and long-duration projects.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-6 xl:grid-cols-2">
                            <div className="rounded-[1.5rem] border border-[var(--border-soft)] bg-white/62 p-6">
                                <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-dim)]">Positioning</p>
                                <div className="mt-4 grid gap-3 text-sm leading-7 text-[var(--text-soft)]">
                                    <p>International production executive combining operational leadership with creative understanding.</p>
                                    <p>Trusted production partner for broadcasters, agencies, studios, brands, and global content producers.</p>
                                    <p>Bridge Indian production capability with international production expectations.</p>
                                    <p>Navigate complex cross-border productions within commercially demanding environments.</p>
                                    <p>Integrate sustainable, efficient, and culturally aware working practices into modern production models.</p>
                                    <p>Build long-term partnerships that support reliable international collaboration.</p>
                                </div>
                            </div>
                            <div className="rounded-[1.5rem] border border-[var(--border-soft)] bg-white/62 p-6">
                                <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-dim)]">Recent credits</p>
                                <div className="mt-4 grid gap-3 text-sm leading-7 text-[var(--text-soft)]">
                                    <p>Feature Films: Dunki and Ganapath.</p>
                                    <p>Streaming Series: The Roshans.</p>
                                    <p>Documentary: Vantara - Where Each Life Matters for Arrow Media and National Geographic.</p>
                                    <p>Global Brand Campaigns: Hyundai, Nestle, Nike, Saint-Gobain, and other international brands.</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[rgba(19,35,60,0.94)] p-6 text-white">
                            <p className="text-sm uppercase tracking-[0.24em] text-[rgba(255,224,184,0.74)]">Closing statement</p>
                            <p className="mt-4 text-lg leading-8">
                                I de-risk productions, align teams, and deliver ambitious projects with clarity, pace, and operational control.
                            </p>
                        </div>
                    </div>
                ) : null}
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
                        <p className="text-sm uppercase tracking-[0.34em] text-[var(--accent-gold)]">How To Read The Site</p>
                    </div>
                    <h2 className="text-4xl text-[var(--surface-strong)] sm:text-5xl">
                        A simpler structure for commissioners, producers and agencies.
                    </h2>
                    <p className="max-w-3xl text-lg leading-8 text-[var(--text-soft)]">
                        Reels are kept visual. Selected projects carry the detailed case studies. The aim is clarity first.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                    {portfolioReviewSteps.map((step, index) => (
                        <div
                            key={step.title}
                            className="rounded-[2rem] border p-7 sm:p-8"
                            style={{
                                borderColor: 'rgba(21, 28, 52, 0.12)',
                                background:
                                    index === 0
                                        ? 'linear-gradient(160deg, rgba(248, 244, 238, 0.96), rgba(255, 255, 255, 0.92))'
                                        : 'linear-gradient(160deg, rgba(242, 237, 231, 0.96), rgba(255, 255, 255, 0.92))',
                            }}
                        >
                            <p className="text-sm uppercase tracking-[0.28em] text-[var(--text-dim)]">Step 0{index + 1}</p>
                            <h3 className="mt-4 text-2xl font-semibold text-[var(--surface-strong)]">{step.title}</h3>
                            <p className="mt-4 text-base leading-8 text-[var(--text-soft)]">{step.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="work" className="rounded-[2.9rem] border border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(250,246,239,0.96),rgba(243,236,226,0.98))] p-8 text-[var(--surface-strong)] shadow-[0_32px_84px_rgba(16,24,38,0.08)] sm:p-10 lg:p-14">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-soft)] bg-white/85 px-4 py-2 text-[var(--surface-panel)]">
                            <Camera size={16} />
                            <p className="text-sm uppercase tracking-[0.34em] text-[var(--accent-gold)]">Selected Reels</p>
                        </div>
                        <h2 className="text-4xl sm:text-5xl text-[var(--surface-strong)]">
                            Commercials and music videos, organised for quick review.
                        </h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-[var(--text-soft)]">
                        Choose a region, then switch between selected projects inside each group. This section is for fast visual review.
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
                    {visibleWorkGroups.map((group, groupIndex) => {
                        const activeVideoId = activeWorkVideos[group.id] || group.videos[0]?.id
                        const activeVideo = group.videos.find((video) => video.id === activeVideoId) ?? group.videos[0]
                        const secondaryVideos = group.videos.filter((video) => video.id !== activeVideo.id)

                        return (
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
                                        <p className="text-sm uppercase tracking-[0.28em] text-[var(--text-dim)]">{group.region}</p>
                                        <h3 className="mt-3 text-2xl font-semibold text-[var(--surface-strong)]">{group.title}</h3>
                                    </div>
                                    <div className="rounded-full border border-[var(--border-soft)] bg-white/76 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--text-dim)]">
                                        {group.videos.length} reels
                                    </div>
                                </div>

                                <div className="mt-5 flex flex-wrap gap-3">
                                    <div className="rounded-full border border-[rgba(16,24,38,0.08)] bg-white/68 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--text-dim)]">
                                        Region: {group.region}
                                    </div>
                                    <div className="rounded-full border border-[rgba(16,24,38,0.08)] bg-white/68 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--text-dim)]">
                                        Format: {group.section}
                                    </div>
                                    <div className="rounded-full border border-[rgba(16,24,38,0.08)] bg-white/68 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--text-dim)]">
                                        Click any preview to swap the main reel
                                    </div>
                                </div>

                                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    <div className="overflow-hidden rounded-[1.25rem] border border-white/8 bg-white/78 text-left transition hover:-translate-y-1">
                                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                                            <LazyAutoplayVideoFrame
                                                key={activeVideo.id}
                                                title={activeVideo.title}
                                                embedUrl={activeVideo.embedUrl}
                                                poster={activeVideo.poster}
                                                controls
                                                muted
                                                loading="eager"
                                                badge={activeVideo.accent}
                                                hint="Featured in portfolio"
                                                playLabel="Play on site"
                                            />
                                        </div>
                                        <div className="px-4 py-4">
                                            <p className="text-sm font-semibold text-[var(--surface-strong)]">{activeVideo.title}</p>
                                            <div className="mt-4">
                                                <a
                                                    href={activeVideo.watchUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex rounded-full border border-slate-900/12 bg-transparent px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--surface-strong)] transition hover:bg-slate-950 hover:text-white"
                                                >
                                                    Open original on YouTube
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {secondaryVideos.map((video) => (
                                        <div
                                            key={video.id}
                                            className="overflow-hidden rounded-[1.25rem] border border-white/8 bg-white/78 text-left transition hover:-translate-y-1"
                                        >
                                            <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                                                <img
                                                    className="h-full w-full object-cover"
                                                    src={video.poster}
                                                    alt={video.title}
                                                    width={320}
                                                    height={200}
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01)_24%,rgba(0,0,0,0.12)_62%,rgba(0,0,0,0.28))]" />
                                                <div className="pointer-events-none absolute inset-x-3 top-3 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-white/84">
                                                    <span className="rounded-full border border-white/16 bg-black/34 px-2 py-1">{video.accent}</span>
                                                    <span className="rounded-full border border-white/16 bg-black/34 px-2 py-1 text-[9px] tracking-[0.18em] text-white/72">
                                                        Preview
                                                    </span>
                                                </div>
                                                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/34 bg-black/42 text-[10px] uppercase tracking-[0.2em] text-white">
                                                        Play
                                                    </span>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setActiveWorkVideos((current) => ({
                                                            ...current,
                                                            [group.id]: video.id,
                                                        }))
                                                    }
                                                    className="absolute inset-0 z-10"
                                                    aria-label={`Highlight ${video.title}`}
                                                />
                                            </div>
                                            <div className="px-4 py-4">
                                                <p className="text-sm font-semibold text-[var(--surface-strong)]">{video.title}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        )
                    })}
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
                            aria-label="Scroll behind-the-scenes carousel left"
                            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white/80 text-[var(--surface-strong)] shadow-[0_14px_30px_rgba(66,76,119,0.12)] transition hover:scale-105 hover:bg-white sm:h-11 sm:w-11"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollCarousel(btsCarouselRef, 'right')}
                            aria-label="Scroll behind-the-scenes carousel right"
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
                                    width={192}
                                    height={128}
                                    className="h-28 w-full object-cover transition duration-300 group-hover:scale-[1.08] sm:h-32 lg:h-36"
                                    loading="lazy"
                                    decoding="async"
                                    fetchPriority="low"
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
                        Long-form project pages for the strongest flagship work.
                    </h2>
                    <p className="max-w-3xl text-lg leading-8 text-[var(--text-soft)]">
                        These are the few projects where additional detail helps explain production scope, complexity and role.
                    </p>
                </div>

                <div className="mt-12 grid gap-6">
                    {works.map((work, index) => (
                        <article
                            key={work.title}
                            className="overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(247,241,232,0.84))] shadow-[0_18px_36px_rgba(16,24,38,0.06)]"
                        >
                            {(() => {
                                const isExpanded = expandedWorks.includes(work.title)

                                return (
                                    <div className="grid gap-0 xl:grid-cols-[24rem_minmax(0,1fr)]">
                                <div
                                    className="relative min-h-[18rem] overflow-hidden xl:min-h-full"
                                    style={{
                                        background: index % 2 === 0
                                            ? 'linear-gradient(145deg, rgba(19,35,60,0.96), rgba(51,83,122,0.88))'
                                            : 'linear-gradient(145deg, rgba(92,54,32,0.96), rgba(166,116,72,0.88))',
                                    }}
                                >
                                    {work.image ? (
                                        <img
                                            src={work.image}
                                            alt={work.title}
                                            width={640}
                                            height={400}
                                            className="absolute inset-0 h-full w-full object-cover"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    ) : null}
                                    <div className="absolute inset-0 bg-[linear-gradient(165deg,rgba(11,19,33,0.84),rgba(24,36,58,0.56))]" />
                                    <div className="relative flex h-full flex-col justify-between px-7 pb-6 pt-7 text-white sm:px-8">
                                        <div className="flex items-start justify-between gap-4">
                                            <p className="max-w-[12rem] text-[11px] uppercase tracking-[0.26em] text-white/68">
                                                {work.format} · {work.territory}
                                            </p>
                                            <div className="rounded-full border border-white/14 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/78">
                                                {work.year}
                                            </div>
                                        </div>
                                        <div className="mt-8">
                                            <h3 className="text-2xl font-semibold">{work.title}</h3>
                                            <p className="mt-4 text-sm uppercase tracking-[0.24em] text-white/68">
                                                {work.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-5 p-7 sm:p-8 lg:p-9">
                                    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_13rem] lg:items-start">
                                    <div className="rounded-[1.35rem] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.78)] p-5 shadow-[0_10px_24px_rgba(16,24,38,0.03)]">
                                        <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-dim)]">Context</p>
                                        <p className={`mt-3 text-sm leading-7 text-[var(--text-soft)] ${isExpanded ? '' : 'line-clamp-4'}`}>
                                            {work.context}
                                        </p>
                                    </div>

                                    <div className="grid gap-4">
                                        <div className="rounded-[1.35rem] border border-[var(--border-soft)] bg-[rgba(247,241,232,0.8)] p-5 shadow-[0_10px_24px_rgba(16,24,38,0.03)]">
                                            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-dim)]">Role</p>
                                            <p className="mt-3 text-base font-semibold text-[var(--surface-strong)]">{work.role}</p>
                                        </div>
                                    </div>
                                    </div>

                                    {isExpanded ? (
                                        <>
                                            {work.details ? (
                                                <>
                                                    <div className="rounded-[1.35rem] border border-[var(--border-soft)] bg-[rgba(247,241,232,0.8)] p-5 shadow-[0_10px_24px_rgba(16,24,38,0.03)]">
                                                        <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-dim)]">Project Overview</p>
                                                        <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{work.details.overview}</p>
                                                    </div>
                                                    <div className="grid gap-4 xl:grid-cols-[0.92fr_1.08fr]">
                                                        <div className="rounded-[1.35rem] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.78)] p-5 shadow-[0_10px_24px_rgba(16,24,38,0.03)]">
                                                            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-dim)]">Credits</p>
                                                            <div className="mt-3 space-y-3 text-sm leading-7 text-[var(--text-soft)]">
                                                                {work.details.credits.map((item) => (
                                                                    <p key={item}>{item}</p>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className="rounded-[1.35rem] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.78)] p-5 shadow-[0_10px_24px_rgba(16,24,38,0.03)]">
                                                            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-dim)]">Responsibilities</p>
                                                            <div className="mt-3 space-y-3 text-sm leading-7 text-[var(--text-soft)]">
                                                                {work.details.responsibilities.map((item) => (
                                                                    <p key={item}>{item}</p>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : null}
                                            <div className="rounded-[1.35rem] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.78)] p-5 shadow-[0_10px_24px_rgba(16,24,38,0.03)]">
                                                <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-dim)]">Production Challenge</p>
                                                <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{work.challenge}</p>
                                            </div>
                                            <div className="rounded-[1.35rem] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.78)] p-5 shadow-[0_10px_24px_rgba(16,24,38,0.03)]">
                                                <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-dim)]">Outcome</p>
                                                <p className="mt-3 text-sm leading-7 text-[var(--surface-strong)]">{work.outcome}</p>
                                            </div>
                                            {work.details ? (
                                                <div className="rounded-[1.35rem] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.78)] p-5 shadow-[0_10px_24px_rgba(16,24,38,0.03)]">
                                                    <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-dim)]">Impact</p>
                                                    <div className="mt-3 space-y-3 text-sm leading-7 text-[var(--surface-strong)]">
                                                        {work.details.impactPoints.map((item) => (
                                                            <p key={item}>{item}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : null}
                                        </>
                                    ) : null}

                                    <div className="flex flex-wrap gap-3 pt-1">
                                        <button
                                            type="button"
                                            onClick={() => toggleExpandedWork(work.title)}
                                            className="inline-flex items-center rounded-full border border-[var(--surface-strong)] bg-[var(--surface-strong)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:opacity-90"
                                        >
                                            {isExpanded ? 'Show less' : 'More info'}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setActiveCaseStudy(work)}
                                            className="inline-flex items-center rounded-full border border-[var(--surface-strong)] bg-transparent px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--surface-strong)] transition hover:bg-[var(--surface-strong)] hover:text-white"
                                        >
                                            Open case study
                                        </button>
                                    </div>
                                </div>
                            </div>
                                )
                            })()}
                        </article>
                    ))}
                </div>
            </section>

            {activeCaseStudy ? (
                <div
                    className="fixed inset-0 z-[120] flex items-center justify-center bg-[rgba(16,24,38,0.58)] p-5 backdrop-blur-[12px] sm:p-8"
                    onClick={() => setActiveCaseStudy(null)}
                >
                    <div
                        className="relative flex h-[84vh] w-full max-w-[1120px] flex-col overflow-hidden rounded-[2rem] border border-white/18 bg-white shadow-[0_30px_90px_rgba(16,24,38,0.28)]"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-center justify-between gap-4 border-b border-[rgba(16,24,38,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,241,232,0.92))] px-5 py-4 sm:px-6">
                            <div>
                                <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-dim)]">Case study</p>
                                <p className="mt-1 text-lg font-semibold text-[var(--surface-strong)]">{activeCaseStudy.title}</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setActiveCaseStudy(null)}
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white text-[var(--surface-strong)] transition hover:bg-[var(--surface-strong)] hover:text-white"
                                aria-label={`Close ${activeCaseStudy.title} case study`}
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="grid flex-1 gap-0 overflow-y-auto lg:grid-cols-[1.02fr_0.98fr]">
                            <div className="border-b border-[rgba(16,24,38,0.08)] bg-[rgba(247,241,232,0.44)] p-5 sm:p-6 lg:border-b-0 lg:border-r">
                                <div className="overflow-hidden rounded-[1.6rem] border border-[var(--border-soft)] bg-white shadow-[0_18px_40px_rgba(16,24,38,0.08)]">
                                    <img
                                        src={activeCaseStudy.image}
                                        alt={`${activeCaseStudy.title} case study poster`}
                                        width={640}
                                        height={400}
                                        className="aspect-[16/10] w-full object-cover"
                                    />
                                </div>

                                <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                                    <div className="rounded-[1.2rem] border border-[var(--border-soft)] bg-white/88 px-4 py-4">
                                        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-dim)]">Format</p>
                                        <p className="mt-2 text-sm font-semibold text-[var(--surface-strong)]">{activeCaseStudy.format}</p>
                                    </div>
                                    <div className="rounded-[1.2rem] border border-[var(--border-soft)] bg-white/88 px-4 py-4">
                                        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-dim)]">Territory</p>
                                        <p className="mt-2 text-sm font-semibold text-[var(--surface-strong)]">{activeCaseStudy.territory}</p>
                                    </div>
                                    <div className="rounded-[1.2rem] border border-[var(--border-soft)] bg-white/88 px-4 py-4">
                                        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-dim)]">Year</p>
                                        <p className="mt-2 text-sm font-semibold text-[var(--surface-strong)]">{activeCaseStudy.year}</p>
                                    </div>
                                </div>

                                <div className="mt-5 overflow-hidden rounded-[1.4rem] border border-[var(--border-soft)] bg-white shadow-[0_12px_28px_rgba(16,24,38,0.06)]">
                                    <img
                                        src={activeCaseStudy.supportingImage}
                                        alt={`${activeCaseStudy.title} film details poster`}
                                        width={640}
                                        height={400}
                                        className="aspect-[16/10] w-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="p-5 sm:p-6">
                                <div className="rounded-[1.45rem] border border-[var(--border-soft)] bg-[rgba(247,241,232,0.52)] p-5">
                                    <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-dim)]">New source documents</p>
                                    <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                                        This project now pulls from the newly added archive. Use the links below to open the latest case study and film details documents directly.
                                    </p>
                                    <div className="mt-5 flex flex-wrap gap-3">
                                        <a
                                            href={activeCaseStudy.caseStudyDocUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center rounded-full border border-[var(--surface-strong)] bg-[var(--surface-strong)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:opacity-90"
                                        >
                                            Open case study doc
                                        </a>
                                        <a
                                            href={activeCaseStudy.filmDetailsDocUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center rounded-full border border-[var(--surface-strong)] bg-transparent px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--surface-strong)] transition hover:bg-[var(--surface-strong)] hover:text-white"
                                        >
                                            Open film details
                                        </a>
                                    </div>
                                </div>

                                <div className="mt-5 rounded-[1.45rem] border border-[var(--border-soft)] bg-white p-5 shadow-[0_10px_24px_rgba(16,24,38,0.04)]">
                                    <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-dim)]">Project context</p>
                                    <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{activeCaseStudy.context}</p>
                                </div>

                                <div className="mt-5 rounded-[1.45rem] border border-[var(--border-soft)] bg-white p-5 shadow-[0_10px_24px_rgba(16,24,38,0.04)]">
                                    <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-dim)]">Production challenge</p>
                                    <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{activeCaseStudy.challenge}</p>
                                </div>

                                <div className="mt-5 rounded-[1.45rem] border border-[var(--border-soft)] bg-white p-5 shadow-[0_10px_24px_rgba(16,24,38,0.04)]">
                                    <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-dim)]">Outcome</p>
                                    <p className="mt-3 text-sm leading-7 text-[var(--surface-strong)]">{activeCaseStudy.outcome}</p>
                                </div>

                                {activeCaseStudy.details ? (
                                    <div className="mt-5 rounded-[1.45rem] border border-[var(--border-soft)] bg-white p-5 shadow-[0_10px_24px_rgba(16,24,38,0.04)]">
                                        <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-dim)]">Key responsibilities</p>
                                        <div className="mt-3 space-y-3 text-sm leading-7 text-[var(--surface-strong)]">
                                            {activeCaseStudy.details.responsibilities.map((item) => (
                                                <p key={item}>{item}</p>
                                            ))}
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

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
                            aria-label="Scroll partner logos left"
                            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white/80 text-[var(--surface-strong)] shadow-[0_14px_30px_rgba(66,76,119,0.12)] transition hover:scale-105 hover:bg-white sm:h-11 sm:w-11"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollCarousel(customersCarouselRef, 'right')}
                            aria-label="Scroll partner logos right"
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
                                        width={168}
                                        height={36}
                                        className="max-h-9 w-full object-contain opacity-95 transition duration-300 group-hover:scale-[1.3]"
                                        loading="lazy"
                                        decoding="async"
                                        fetchPriority="low"
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
                            <p className="mt-3 break-all text-lg font-semibold text-[var(--surface-strong)] sm:text-xl">swarpfilms@gmail.com</p>
                        </div>
                        <div className="rounded-[1.8rem] border border-[var(--border-soft)] bg-white/72 p-6">
                            <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-dim)]">WhatsApp</p>
                            <p className="mt-3 break-words text-lg font-semibold text-[var(--surface-strong)] sm:text-xl">+91 91047 43013</p>
                        </div>
                        <div className="rounded-[1.8rem] border border-[var(--border-soft)] bg-white/72 p-6">
                            <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-dim)]">IMDb</p>
                            <a
                                href="https://www.imdb.com/es/name/nm5364507/"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-3 inline-flex break-all text-lg font-semibold text-[var(--surface-strong)] transition hover:text-[var(--accent-gold)] sm:text-xl"
                            >
                                imdb.com/es/name/nm5364507/
                            </a>
                        </div>
                        <div className="rounded-[1.8rem] border border-[var(--border-soft)] bg-white/72 p-6">
                            <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-dim)]">LinkedIn</p>
                            <a
                                href="https://www.linkedin.com/in/umangagarwal20/"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-3 inline-flex break-all text-lg font-semibold text-[var(--surface-strong)] transition hover:text-[var(--accent-gold)] sm:text-xl"
                            >
                                linkedin.com/in/umangagarwal20/
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
