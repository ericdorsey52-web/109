import React from 'react'

type Props = {
  value: number
  min?: number
  max?: number
  onChange: (n: number) => void
}

export default function QuantityPicker({ value, min = 0, max = 99, onChange }: Props){
  function set(n: number){
    const clamped = Math.max(min, Math.min(max, Math.round(n)))
    onChange(clamped)
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => set(value - 1)}
        className="px-2 py-1 rounded-md bg-slate-700 hover:bg-slate-600"
        aria-label="decrease"
      >
        -
      </button>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => set(Number(e.target.value))}
        className="w-16 text-center rounded-md bg-slate-800 px-2 py-1"
      />
      <button
        onClick={() => set(value + 1)}
        className="px-2 py-1 rounded-md bg-slate-700 hover:bg-slate-600"
        aria-label="increase"
      >
        +
      </button>
    </div>
  )
}
