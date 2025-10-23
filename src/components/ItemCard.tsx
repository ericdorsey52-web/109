import React from 'react'
import QuantityPicker from './QuantityPicker'
import { useCart } from '../context/CartContext'

type Item = {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
}

type Props = {
  item: Item
}

export default function ItemCard({ item }: Props){
  const { getQuantity, setQuantity } = useCart()
  const qty = getQuantity(item.id)
  const total = qty * item.price

  return (
    <div className="card flex flex-col md:flex-row gap-4 items-center">
      <div className="w-full md:w-48 h-48 bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
        <img loading="lazy" src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-sm text-slate-300/80 mt-2">{item.description}</p>
        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-extrabold">${item.price.toFixed(2)}</div>
            <div className="text-sm text-slate-400">each</div>
          </div>

          <div className="flex items-center gap-4">
            <QuantityPicker value={qty} onChange={(n) => setQuantity(item.id, n)} />
            <div className="text-right">
              <div className="text-sm text-slate-300/80">Total</div>
              <div className="text-xl font-semibold">${total.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
