import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-amber-50 to-emerald-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs text-rose-700 ring-1 ring-rose-200 backdrop-blur">
              Trusted Vani Samaj Matchmaking
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-neutral-900">
              Plan Your Dream Wedding With Us
            </h1>
            <p className="mt-4 text-neutral-700 leading-relaxed max-w-xl">
              A respectful, secure space for the Vani Samaj community to connect with care.
              Discover meaningful matches and begin your journey with confidence.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#join"
                className="group inline-flex items-center gap-2 rounded-full bg-rose-500 px-6 py-3 text-white font-medium shadow-lg shadow-rose-200/50 hover:bg-rose-600 transition transform hover:-translate-y-0.5"
              >
                Book a Free Consultation
                <ChevronRight className="size-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#profiles"
                className="inline-flex items-center rounded-full px-6 py-3 text-rose-700 bg-white/70 ring-1 ring-rose-200 hover:ring-rose-300 transition"
              >
                Explore Profiles
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop"
                alt="Elegant wedding couple"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-white/30" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="rounded-2xl bg-white/80 ring-1 ring-neutral-200 p-4 shadow backdrop-blur">
                <p className="text-sm font-medium text-neutral-800">Warm, pastel aesthetics</p>
                <p className="text-xs text-neutral-600">Peach, white and green highlights</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
