import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Profiles', href: '#profiles' },
  { label: 'Matches', href: '#matches' },
  { label: 'Chat', href: '#chat' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-rose-300 via-rose-400 to-emerald-300 shadow-inner" />
            <span className="text-xl font-semibold tracking-tight font-serif text-neutral-800">
              Vani Bond
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-neutral-700 hover:text-rose-600 transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-rose-500 after:transition-all"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#join"
              className="inline-flex items-center rounded-full bg-rose-500 text-white px-4 py-2 text-sm font-medium shadow hover:bg-rose-600 active:scale-[0.98] transition"
            >
              Join Now
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-2 fade-in duration-200">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#join"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-rose-500 text-white px-4 py-2 text-sm font-medium shadow hover:bg-rose-600 transition"
                onClick={() => setOpen(false)}
              >
                Join Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
