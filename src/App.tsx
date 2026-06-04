import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { Clapperboard, Linkedin, Mail, MessageCircle } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const PortfolioSections = lazy(() => import('./components/PortfolioSections'))

function App() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [shouldLoadPortfolio, setShouldLoadPortfolio] = useState(false)
    const portfolioEntryRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (shouldLoadPortfolio || !portfolioEntryRef.current) return

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    setShouldLoadPortfolio(true)
                    observer.disconnect()
                }
            },
            { rootMargin: '240px 0px' },
        )

        observer.observe(portfolioEntryRef.current)

        return () => observer.disconnect()
    }, [shouldLoadPortfolio])

    return (
        <div className="min-h-screen bg-[var(--surface-base)] text-white">
            <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(180deg,rgba(16,24,38,0.02),transparent_18%,transparent_82%,rgba(16,24,38,0.04))]" />
            <Navbar menuOpen={menuOpen} onToggle={() => setMenuOpen((prev) => !prev)} />
            <Hero />

            <div ref={portfolioEntryRef} aria-hidden="true" className="h-px w-full" />
            <main className="relative mx-auto max-w-[88rem] px-6 pb-28 pt-6 sm:px-8 lg:px-12">
                {shouldLoadPortfolio ? (
                    <Suspense
                        fallback={
                            <div className="rounded-[2.4rem] border border-[var(--border-soft)] bg-white/72 px-6 py-10 text-sm text-[var(--text-dim)] shadow-[0_18px_40px_rgba(16,24,38,0.04)]">
                                Loading portfolio sections...
                            </div>
                        }
                    >
                        <PortfolioSections />
                    </Suspense>
                ) : (
                    <div className="rounded-[2.4rem] border border-[var(--border-soft)] bg-white/60 px-6 py-10 text-sm text-[var(--text-dim)] shadow-[0_18px_40px_rgba(16,24,38,0.04)]">
                        Scroll to load portfolio sections.
                    </div>
                )}
            </main>

            <footer className="relative border-t border-[rgba(16,24,38,0.08)] bg-[rgba(244,239,231,0.6)]">
                <div className="mx-auto flex max-w-[88rem] flex-col gap-3 px-6 py-5 text-[var(--surface-strong)] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--text-dim)]">Website Credit</p>
                        <p className="mt-1 text-xs leading-6 text-[var(--text-dim)]">
                            Website created by Fiamma Brizuela.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <a
                            href="mailto:brizuelafiamma6@gmail.com?subject=Website%20Enquiry"
                            className="inline-flex w-fit rounded-full border border-[var(--border-soft)] bg-white/72 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] transition hover:border-[var(--border-strong)] hover:text-[var(--surface-strong)]"
                        >
                            Email
                        </a>
                        <a
                            href="https://wa.me/542616801745"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-fit rounded-full border border-[var(--border-soft)] bg-white/72 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] transition hover:border-[var(--border-strong)] hover:text-[var(--surface-strong)]"
                        >
                            WhatsApp
                        </a>
                        <a
                            href="https://www.linkedin.com/in/fiamma-brizuela-16195224b"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-fit rounded-full border border-[var(--border-soft)] bg-white/72 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] transition hover:border-[var(--border-strong)] hover:text-[var(--surface-strong)]"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://fiammab.github.io/Portafolio/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-fit rounded-full border border-[var(--border-soft)] bg-white/72 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] transition hover:border-[var(--border-strong)] hover:text-[var(--surface-strong)]"
                        >
                            Portfolio
                        </a>
                    </div>
                </div>
            </footer>

            <div className="fixed bottom-[10.2rem] right-5 z-[110] flex flex-col gap-3 sm:bottom-[11rem] sm:right-7">
                <a
                    href="https://www.imdb.com/es/name/nm5364507/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open IMDb profile"
                    className="inline-flex h-14 w-14 items-center justify-center self-end rounded-full border border-[rgba(255,255,255,0.42)] bg-[linear-gradient(135deg,#f6c700,#ddb100)] text-[#1b1b1b] shadow-[0_18px_40px_rgba(221,177,0,0.28)] transition hover:scale-[1.03] hover:shadow-[0_22px_50px_rgba(221,177,0,0.36)]"
                >
                    <Clapperboard size={18} />
                </a>

                <a
                    href="https://www.linkedin.com/in/umangagarwal20/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open LinkedIn profile"
                    className="inline-flex h-14 w-14 items-center justify-center self-end rounded-full border border-[rgba(255,255,255,0.38)] bg-[linear-gradient(135deg,#0a66c2,#004182)] text-white shadow-[0_18px_40px_rgba(10,102,194,0.3)] transition hover:scale-[1.03] hover:shadow-[0_22px_50px_rgba(10,102,194,0.38)]"
                >
                    <Linkedin size={18} />
                </a>
            </div>

            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=swarpfilms@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Send an email"
                className="fixed bottom-[5.5rem] right-5 z-[110] inline-flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(255,255,255,0.4)] bg-[linear-gradient(135deg,rgba(19,35,60,0.96),rgba(46,64,92,0.94))] text-white shadow-[0_18px_44px_rgba(19,35,60,0.28)] transition hover:scale-[1.03] hover:shadow-[0_22px_54px_rgba(19,35,60,0.36)] sm:bottom-[6.1rem] sm:right-7"
            >
                <Mail size={22} />
            </a>

            <a
                href="https://wa.me/919104743013"
                target="_blank"
                rel="noreferrer"
                aria-label="Message on WhatsApp"
                className="fixed bottom-5 right-5 z-[110] inline-flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(255,255,255,0.34)] bg-[linear-gradient(135deg,#1faa59,#128c4a)] text-white shadow-[0_18px_44px_rgba(18,140,74,0.34)] transition hover:scale-[1.03] hover:shadow-[0_22px_54px_rgba(18,140,74,0.42)] sm:bottom-7 sm:right-7"
            >
                <MessageCircle size={22} />
            </a>
        </div>
    )
}

export default App
