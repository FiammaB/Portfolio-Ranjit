import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
    menuOpen: boolean
    onToggle: () => void
}

const navLinks = [
    { href: '#hero', label: 'HOME' },
    { href: '#portfolio', label: 'PORTFOLIO' },
    { href: '#contact', label: 'CONTACT' },
]

export default function Navbar({ menuOpen, onToggle }: NavbarProps) {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
                <a href="#hero" className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">
                    Ranjit Bhatia
                </a>

                <nav className="hidden items-center gap-10 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm uppercase tracking-[0.28em] text-slate-700 transition hover:text-slate-900"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <button
                    type="button"
                    onClick={onToggle}
                    aria-label="Toggle navigation"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/70 bg-slate-100/90 text-slate-900 transition hover:border-slate-300/90 hover:text-slate-950 md:hidden"
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            <motion.div
                initial={false}
                animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
                className="overflow-hidden border-t border-slate-200/70 bg-white/95 md:hidden"
            >
                <div className="flex flex-col gap-4 px-6 pb-6 pt-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={onToggle}
                            className="text-base uppercase tracking-[0.24em] text-slate-700 transition hover:text-slate-900"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </motion.div>
        </header>
    )
}
