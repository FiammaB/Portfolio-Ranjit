import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PortfolioSections from './components/PortfolioSections'

function App() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="min-h-screen bg-slate-100 text-slate-900">
            <Navbar menuOpen={menuOpen} onToggle={() => setMenuOpen((prev) => !prev)} />
            <Hero />

            <main className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 sm:px-8 lg:px-12">
                <PortfolioSections />
            </main>
        </div>
    )
}

export default App
