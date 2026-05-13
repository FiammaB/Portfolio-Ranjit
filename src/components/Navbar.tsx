import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
    menuOpen: boolean
    onToggle: () => void
}

const navLinks = [
    { href: '#hero', label: 'HOME' },
    { href: '#about', label: 'ABOUT' },
    { href: '#services', label: 'SERVICES' },
    { href: '#portfolio', label: 'PORTFOLIO' },
    { href: '#work', label: 'WORK' },
    { href: '#case-studies', label: 'CASE STUDIES' },
    { href: '#testimonials', label: 'TESTIMONIALS' },
    { href: '#network-collaborations', label: 'NETWORK COLLABORATIONS' },
]

export default function Navbar({ menuOpen, onToggle }: NavbarProps) {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(16,24,38,0.08)] bg-[rgba(244,239,231,0.82)] backdrop-blur-2xl">
            <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-12">
                <a href="#hero" className="shrink-0 flex flex-col text-[var(--surface-strong)]">
                    <span className="text-sm font-semibold uppercase tracking-[0.28em]">Umang Agarwal</span>
                    <span className="mt-1 text-[10px] uppercase tracking-[0.34em] text-[var(--text-dim)]">
                        International Production Executive
                    </span>
                </a>

                <nav className="hidden flex-1 items-center justify-center gap-5 2xl:gap-6 xl:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] transition hover:text-[var(--surface-strong)]"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="#contact"
                    className="hidden shrink-0 rounded-full border border-[var(--border-strong)] bg-[var(--surface-strong)] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[var(--surface-panel)] xl:inline-flex"
                >
                    Contact Office
                </a>

                <button
                    type="button"
                    onClick={onToggle}
                    aria-label="Open or close navigation"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-strong)] bg-white/70 text-[var(--surface-strong)] transition hover:bg-white xl:hidden"
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            <motion.div
                initial={false}
                animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
                className="overflow-hidden border-t border-[rgba(16,24,38,0.08)] bg-[rgba(244,239,231,0.98)] xl:hidden"
            >
                <div className="flex flex-col gap-4 px-6 pb-6 pt-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={onToggle}
                            className="text-sm uppercase tracking-[0.24em] text-[var(--text-dim)] transition hover:text-[var(--surface-strong)]"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={onToggle}
                        className="mt-2 inline-flex w-fit rounded-full border border-[var(--border-strong)] bg-[var(--surface-strong)] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white"
                    >
                        Contact Office
                    </a>
                </div>
            </motion.div>
        </header>
    )
}
