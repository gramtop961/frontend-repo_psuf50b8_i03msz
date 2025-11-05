import { useMemo, useState } from 'react'
import { Heart, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const demoProfiles = [
  { id: 'p1', name: 'Aisha Sharma', age: 24, city: 'Ahmedabad', photo: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=1200&auto=format&fit=crop', bio: 'Classical dancer • Loves books & long walks' },
  { id: 'p2', name: 'Neha Patel', age: 26, city: 'Vadodara', photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop', bio: 'Foodie • Family-oriented • Exploring the world' },
  { id: 'p3', name: 'Riya Desai', age: 25, city: 'Surat', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop', bio: 'Designer • Coffee lover • Yoga' },
  { id: 'p4', name: 'Ananya Joshi', age: 23, city: 'Mumbai', photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200&auto=format&fit=crop', bio: 'Entrepreneur • Family values • Art & craft' },
  { id: 'p5', name: 'Khushi Shah', age: 27, city: 'Rajkot', photo: 'https://images.unsplash.com/photo-1544005316-04ae1ea2c936?q=80&w=1200&auto=format&fit=crop', bio: 'Teacher • Warm & cheerful • Music' },
]

export default function ProfilesSection({ currentUser }) {
  const [liked, setLiked] = useState([])
  const [requested, setRequested] = useState([])
  const [index, setIndex] = useState(0)
  const profiles = useMemo(() => demoProfiles, [])

  const active = profiles[index]

  const like = (id) => {
    setLiked((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }

  const requestChat = (id) => {
    if (!currentUser) {
      alert('Please login to request a chat.')
      return
    }
    if (!requested.includes(id)) {
      setRequested([...requested, id])
      alert('Successfully sent chat request. Waiting for approval.')
    }
  }

  const swipe = (direction) => {
    if (index < profiles.length - 1) setIndex(index + 1)
  }

  return (
    <section id="profiles" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif">Profiles</h2>
            <p className="text-neutral-600 mt-2">Swipe through thoughtfully curated profiles</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-[520px] w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence>
                {active && (
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.35 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, info) => {
                      if (info.offset.x > 120) swipe('right')
                      if (info.offset.x < -120) swipe('left')
                    }}
                    className="relative h-[520px] w-80 sm:w-96 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-neutral-200 bg-neutral-100"
                  >
                    <img src={active.photo} alt={active.name} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 p-5 text-white">
                      <h3 className="text-xl font-semibold">{active.name}, {active.age}</h3>
                      <p className="text-sm text-neutral-200">{active.city} • {active.bio}</p>
                      <div className="mt-4 flex gap-3">
                        <button
                          onClick={() => { like(active.id); alert('Added to Matches') }}
                          className="inline-flex items-center gap-2 rounded-full bg-white/90 text-rose-600 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white"
                        >
                          <Heart className="size-4" /> Like
                        </button>
                        <button
                          onClick={() => requestChat(active.id)}
                          className="inline-flex items-center gap-2 rounded-full bg-rose-500 text-white px-4 py-2 text-sm font-medium hover:bg-rose-600"
                        >
                          <MessageCircle className="size-4" /> Chat
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {profiles.map((p) => (
              <div key={p.id} className={`group rounded-2xl overflow-hidden ring-1 ring-neutral-200 shadow-sm ${p.id===active?.id?'opacity-100':'opacity-90'}`}>
                <img src={p.photo} alt={p.name} className="h-40 w-full object-cover transition group-hover:scale-105" />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-neutral-900">{p.name}</h4>
                    <span className="text-xs text-neutral-500">{p.city}</span>
                  </div>
                  <p className="text-sm text-neutral-600 mt-1 line-clamp-2">{p.bio}</p>
                  <div className="mt-3 flex gap-2">
                    <button onClick={() => like(p.id)} className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700 hover:bg-neutral-200">Like</button>
                    <button onClick={() => requestChat(p.id)} className="rounded-full bg-rose-500 text-white px-3 py-1 text-xs hover:bg-rose-600">Chat</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
