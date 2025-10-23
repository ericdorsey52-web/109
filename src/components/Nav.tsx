import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <header className="bg-black/40 backdrop-blur-sm border-b border-slate-700">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="brand text-neon">Legacy Horizons</Link>
          <nav className="hidden md:flex gap-3 text-sm text-slate-200/80">
            <Link to="/catalog" className="hover:underline">Catalog</Link>
            <Link to="/cart" className="hover:underline">Cart</Link>
            <Link to="/about" className="hover:underline">About</Link>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Link to="/signin" className="button-primary">Sign in</Link>
        </div>
      </div>
    </header>
  )
}
