import { motion } from 'framer-motion'
import { Heart, ShieldCheck, Users } from 'lucide-react'

const features = [
  {
    title: 'Respectful & Secure',
    icon: ShieldCheck,
    desc: 'Privacy-first profiles, verified community, and thoughtful moderation.',
  },
  {
    title: 'Community-Centric',
    icon: Users,
    desc: 'A trusted space crafted exclusively for the Vani Samaj community.',
  },
  {
    title: 'Meaningful Matches',
    icon: Heart,
    desc: 'Smart, balanced recommendations that go beyond swipes.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-b from-white to-rose-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">About Our Wedding Planner</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
            Vani Bond blends elegance with authenticity—creating pathways for meaningful connections and beautiful beginnings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-xl bg-rose-100 text-rose-700 p-3">
                  <f.icon className="size-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900">{f.title}</h3>
                  <p className="mt-1 text-neutral-600">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
