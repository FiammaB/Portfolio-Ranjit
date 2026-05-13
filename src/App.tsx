import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PortfolioSections from './components/PortfolioSections'

function App() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="min-h-screen bg-[var(--surface-base)] text-white">
            <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(180deg,rgba(16,24,38,0.02),transparent_18%,transparent_82%,rgba(16,24,38,0.04))]" />
            <Navbar menuOpen={menuOpen} onToggle={() => setMenuOpen((prev) => !prev)} />
            <Hero />

            <main className="relative mx-auto max-w-[88rem] px-6 pb-28 pt-6 sm:px-8 lg:px-12">
                <PortfolioSections />
            </main>
        </div>
    )
}

export default App
