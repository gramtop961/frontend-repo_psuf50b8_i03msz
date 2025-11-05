import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function AuthModal({ open, mode = 'login', onClose, onAuthSuccess }) {
  const [active, setActive] = useState(mode)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  useEffect(() => {
    setActive(mode)
    setError('')
  }, [mode, open])

  if (!open) return null

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const endpoint = active === 'signup' ? '/auth/signup' : '/auth/login'
      const payload = active === 'signup'
        ? { name: form.name.trim(), email: form.email.trim(), password: form.password }
        : { name: form.name.trim(), password: form.password }

      const res = await fetch(`${API_BASE}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Something went wrong')
      // persist and notify
      localStorage.setItem('vb_user', JSON.stringify(data))
      onAuthSuccess?.(data)
      onClose?.()
    } catch (err) {
      setError(err.message || 'Failed')
    } finally {
      setLoading(false)
    }
  }

  const inputBase = 'w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-rose-300'

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/30 p-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl ring-1 ring-neutral-200" onClick={(e)=>e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-neutral-900">{active === 'signup' ? 'Create your account' : 'Welcome back'}</h3>
          <button onClick={onClose} aria-label="Close" className="text-neutral-500 hover:text-neutral-800">✕</button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 rounded-lg bg-neutral-100 p-1 text-sm">
          <button
            className={`rounded-md px-3 py-1.5 ${active==='login'?'bg-white shadow':''}`}
            onClick={()=>{setActive('login'); setError('')}}
          >Login</button>
          <button
            className={`rounded-md px-3 py-1.5 ${active==='signup'?'bg-white shadow':''}`}
            onClick={()=>{setActive('signup'); setError('')}}
          >Sign Up</button>
        </div>

        <form className="mt-4 space-y-3" onSubmit={submit}>
          {/* Name always required */}
          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1">Name</label>
            <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className={inputBase} placeholder="Your name" />
          </div>

          {active === 'signup' && (
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">Email</label>
              <input type="email" required value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className={inputBase} placeholder="you@example.com" />
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1">Password</label>
            <input type="password" required value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})} className={inputBase} placeholder="••••••••" />
          </div>

          {error && <p className="text-sm text-rose-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-rose-500 text-white py-2.5 text-sm font-medium shadow hover:bg-rose-600 disabled:opacity-60"
          >{loading ? 'Please wait...' : (active==='signup' ? 'Create Account' : 'Login')}</button>
        </form>

        <div className="my-4 flex items-center gap-3 text-xs text-neutral-500">
          <div className="h-px flex-1 bg-neutral-200" />
          <span>or</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        <button
          type="button"
          onClick={() => alert('Google sign-in is not configured in this demo environment.')}
          className="w-full rounded-full bg-white ring-1 ring-neutral-300 py-2.5 text-sm font-medium hover:bg-neutral-50"
        >Continue with Google</button>
      </div>
    </div>
  )
}
