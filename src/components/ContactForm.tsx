import { motion } from 'framer-motion'

export default function ContactForm() {
    return (
        <section id="contact" className="mt-24 scroll-mt-24 rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/20 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div>
                    <p className="text-sm uppercase tracking-[0.32em] text-amber-300">Connect</p>
                    <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Let's build the next cinematic chapter.</h2>
                    <p className="mt-4 max-w-xl text-base leading-8 text-slate-400">
                        Send a brief message with your production vision, co-proposal, or upcoming executive review requirements.
                    </p>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-5"
                    onSubmit={(event) => event.preventDefault()}
                >
                    <div className="space-y-3">
                        <label className="block text-sm font-medium text-slate-200">Name</label>
                        <input
                            type="text"
                            required
                            placeholder="Umang Agarwal"
                            className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-400/80 focus:ring-2 focus:ring-amber-400/20"
                        />
                    </div>
                    <div className="space-y-3">
                        <label className="block text-sm font-medium text-slate-200">Email</label>
                        <input
                            type="email"
                            required
                            placeholder="hello@studio.com"
                            className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-400/80 focus:ring-2 focus:ring-amber-400/20"
                        />
                    </div>
                    <div className="space-y-3">
                        <label className="block text-sm font-medium text-slate-200">Message</label>
                        <textarea
                            rows={5}
                            required
                            placeholder="Briefly describe the project or collaboration you have in mind."
                            className="w-full rounded-[1.75rem] border border-white/10 bg-slate-900/90 px-4 py-4 text-slate-100 outline-none transition focus:border-amber-400/80 focus:ring-2 focus:ring-amber-400/20"
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-950 transition hover:bg-amber-400"
                    >
                        Send Inquiry
                    </button>
                </motion.form>
            </div>
        </section>
    )
}
