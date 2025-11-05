import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GalleryGrid from './components/GalleryGrid'
import AboutSection from './components/AboutSection'

function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-rose-300 via-rose-400 to-emerald-300" />
            <span className="text-lg font-serif">Vani Bond</span>
          </div>
          <p className="mt-3 text-sm text-neutral-600 max-w-sm">
            A respectful and inspiring matchmaking platform for the Vani Samaj community.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-neutral-800">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-600">
            <li><a className="hover:text-rose-700" href="#profiles">Profiles</a></li>
            <li><a className="hover:text-rose-700" href="#matches">Matches</a></li>
            <li><a className="hover:text-rose-700" href="#chat">Chat</a></li>
            <li><a className="hover:text-rose-700" href="#about">About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium text-neutral-800">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-600">
            <li>Email: hello@vanibond.in</li>
            <li>Phone: +91 98765 43210</li>
            <li>WhatsApp: +91 98765 43210</li>
          </ul>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Vani Bond. All rights reserved.</div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen antialiased text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <GalleryGrid />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
