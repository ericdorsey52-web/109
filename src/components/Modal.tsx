import React from 'react'

type Props = {
  open: boolean
  title?: string
  onClose: () => void
  children?: React.ReactNode
}

export default function Modal({ open, title, onClose, children }: Props){
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-slate-900 rounded-lg p-6 max-w-lg w-full shadow-xl">
        {title && <h3 className="text-xl font-bold mb-3">{title}</h3>}
        <div>{children}</div>
        <div className="mt-4 text-right">
          <button className="px-4 py-2 bg-slate-700 rounded-md" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}
