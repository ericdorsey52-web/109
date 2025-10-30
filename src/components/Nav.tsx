import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart, FiUser, FiLogIn, FiLogOut } from 'react-icons/fi'
import { useUser } from '../context/UserContext'

export default function Nav() {
  const { username, logout, isAdmin } = useUser();
  return (
    <header className="bg-black/40 backdrop-blur-sm border-b border-slate-700">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="brand text-neon">Legacy Horizons</Link>
          <nav className="hidden md:flex gap-3 text-sm text-slate-200/80">
            <Link to="/catalog" className="hover:underline">Catalog</Link>
            <Link to="/cart" className="hover:underline flex items-center gap-1">
              <FiShoppingCart className="inline" />
              Cart
            </Link>
            <Link to="/about" className="hover:underline">About</Link>
            {isAdmin && (
              <Link to="/admin" className="hover:underline">Admin</Link>
            )}
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-3">
          {username ? (
            <div className="flex items-center gap-3">
              <span className="text-slate-200 flex items-center gap-1">
                <FiUser className="inline" />
                {username}
              </span>
              <button onClick={logout} className="button-primary flex items-center gap-1">
                <FiLogOut className="inline" />
                Sign out
              </button>
            </div>
          ) : (
            <Link to="/signin" className="button-primary flex items-center gap-1">
              <FiLogIn className="inline" />
              Sign in
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
