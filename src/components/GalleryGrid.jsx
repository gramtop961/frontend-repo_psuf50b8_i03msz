import { motion } from 'framer-motion'

const items = [
  {
    title: 'Engagements',
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Ceremonies',
    img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Couple Stories',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Decor & Design',
    img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Traditions',
    img: 'https://images.unsplash.com/photo-1519223400710-6da8d12f84b4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Moments',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function GalleryGrid() {
  return (
    <section id="gallery" className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">
              Elegant Moments
            </h2>
            <p className="mt-2 text-neutral-600">A glimpse into our world of thoughtful unions</p>
          </div>
          <a
            href="#gallery-page"
            className="hidden md:inline-flex items-center gap-2 text-rose-700 hover:text-rose-800"
          >
            View Gallery →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((card, i) => (
            <motion.a
              key={card.title}
              href="#gallery-page"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-neutral-200 bg-neutral-50 shadow-sm"
            >
              <img
                src={card.img}
                alt={card.title}
                className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <h3 className="text-white font-medium drop-shadow">{card.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
