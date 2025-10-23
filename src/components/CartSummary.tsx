import React from 'react'
import { useCart } from '../context/CartContext'
import { fetchItems, Item } from '../services/itemService'

export default function CartSummary(){
  const { cart } = useCart()
  const [itemsMap, setItemsMap] = React.useState<Record<string, Item>>({})

  React.useEffect(() => {
    fetchItems().then(list => {
      const map: Record<string, Item> = {}
      list.forEach(i => (map[i.id] = i))
      setItemsMap(map)
    })
  }, [])

  const entries = Object.entries(cart)
  if (entries.length === 0) return <div className="card">Your cart is empty</div>

  const total = entries.reduce((acc, [id, qty]) => {
    const item = itemsMap[id]
    return acc + (item ? item.price * qty : 0)
  }, 0)

  return (
    <div className="card">
      <h3 className="text-lg font-bold mb-2">Cart summary</h3>
      <ul className="space-y-2">
        {entries.map(([id, qty]) => {
          const item = itemsMap[id]
          return (
            <li key={id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={item?.imageUrl} alt={item?.name} className="w-12 h-12 object-cover rounded" />
                <div>
                  <div className="font-semibold">{item?.name}</div>
                  <div className="text-sm text-slate-300/80">{qty} × ${item?.price.toFixed(2)}</div>
                </div>
              </div>
              <div className="font-semibold">${(item ? item.price * qty : 0).toFixed(2)}</div>
            </li>
          )
        })}
      </ul>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-slate-300/80">Total</div>
        <div className="text-xl font-extrabold">${total.toFixed(2)}</div>
      </div>
    </div>
  )
}
