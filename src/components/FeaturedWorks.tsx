import { motion } from 'framer-motion'
import { featuredProjects } from '../data/projects'

export default function FeaturedWorks() {
    return (
        <section id="portfolio" className="mt-24 scroll-mt-24">
            <div className="flex flex-col gap-4">
                <p className="text-sm uppercase tracking-[0.32em] text-amber-300">Featured Works</p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">A portfolio built for visionary production partners.</h2>
                <p className="max-w-2xl text-base leading-8 text-slate-400">
                    Each project is crafted with cinematic precision, high-end pacing, and minimalist staging to impress production executives and global studios.
                </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {featuredProjects.map((project) => (
                    <motion.article
                        key={project.title}
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 shadow-2xl shadow-slate-950/20"
                    >
                        <div className="relative h-72 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
                        </div>
                        <div className="space-y-4 p-6">
                            <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-400">
                                <span>{project.year}</span>
                                <span>{project.role}</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                            <p className="text-sm leading-7 text-slate-300">{project.description}</p>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    )
}
