import React from 'react'
import { useCart } from '../context/CartContext'
import { fetchItems, Item } from '../services/itemService'
import QuantityPicker from '../components/QuantityPicker'

export default function CartPage(){
  const { cart, setQuantity, clear } = useCart()
  const [itemsMap, setItemsMap] = React.useState<Record<string, Item>>({})
  const [loading, setLoading] = React.useState(true)
  const [processing, setProcessing] = React.useState(false)
  const [confirmed, setConfirmed] = React.useState(false)

  React.useEffect(() => {
    fetchItems().then(list => {
      const map: Record<string, Item> = {}
      list.forEach(i => (map[i.id] = i))
      setItemsMap(map)
      setLoading(false)
    })
  }, [])

  const entries = Object.entries(cart)
  const subtotal = entries.reduce((acc, [id, qty]) => {
    const it = itemsMap[id]
    return acc + (it ? it.price * qty : 0)
  }, 0)

  async function handlePay(){
    setProcessing(true)
    // simulate network/payment delay
    await new Promise((res) => setTimeout(res, 1200))
    setProcessing(false)
    setConfirmed(true)
    clear()
  }

  if (loading) return <div>Loading…</div>

  if (confirmed) return (
    <div className="card text-center">
      <h2 className="text-2xl font-bold">Payment confirmed</h2>
      <p className="mt-2 text-slate-300/80">Thanks — your mock payment was successful. Your cart has been cleared.</p>
    </div>
  )

  if (entries.length === 0) return <div className="card">Your cart is empty</div>

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Your cart</h1>
      <div className="card">
        <ul className="space-y-4">
          {entries.map(([id, qty]) => {
            const it = itemsMap[id]
            if (!it) return null
            return (
              <li key={id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={it.imageUrl} alt={it.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <div className="font-semibold">{it.name}</div>
                    <div className="text-sm text-slate-300/80">${it.price.toFixed(2)}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <QuantityPicker value={qty} onChange={(n) => setQuantity(id, n)} />
                  <div className="font-semibold">${(it.price * qty).toFixed(2)}</div>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-slate-300/80">Subtotal</div>
          <div className="text-xl font-extrabold">${subtotal.toFixed(2)}</div>
        </div>

        <div className="mt-6 text-right">
          <button className="button-primary" onClick={handlePay} disabled={processing}>
            {processing ? 'Processing…' : 'Pay now (mock)'}
          </button>
        </div>
      </div>
    </div>
  )
}
