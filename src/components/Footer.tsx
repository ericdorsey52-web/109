import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t border-slate-700 bg-black/30">
      <div className="container py-6 flex items-center justify-between text-sm text-slate-300/70">
  <div>© {new Date().getFullYear()} Legacy Horizons</div>
        <div className="hidden sm:block">Urban activewear for your best self</div>
      </div>
    </footer>
  )
}
