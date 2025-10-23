import React from 'react'
import { fetchItems, Item } from '../services/itemService'
import ItemCard from '../components/ItemCard'
import CartSummary from '../components/CartSummary'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'

export default function Catalog(){
  const [items, setItems] = React.useState<Item[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    fetchItems().then((res) => { setItems(res); setLoading(false) })
  }, [])

  const { cart } = useCart()
  const navigate = useNavigate()

  const cartEmpty = Object.keys(cart).length === 0
  const [confirmOpen, setConfirmOpen] = React.useState(false)

  return (
    <section>
      <header className="mb-6 flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-extrabold">Catalog</h1>
          <p className="text-slate-300/80 mt-1">Curated urban workout clothing — pick your fit.</p>
        </div>
      </header>

      {loading ? (
        <div>Loading…</div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {items.map(it => (
              <ItemCard key={it.id} item={it} />
            ))}
          </div>
          <aside className="space-y-6">
            <CartSummary />
            <div>
              <button
                onClick={() => setConfirmOpen(true)}
                disabled={cartEmpty}
                className={`w-full button-primary ${cartEmpty ? 'opacity-50 cursor-not-allowed' : ''}`}>
                Checkout
              </button>
            </div>
          </aside>
        </div>
      )}
      <Modal open={confirmOpen} title="Confirm checkout" onClose={() => setConfirmOpen(false)}>
        <p className="text-slate-300/80">You're about to proceed to checkout. Would you like to continue to the Cart page to complete payment?</p>
        <div className="mt-4 flex gap-3 justify-end">
          <button className="px-4 py-2 bg-slate-700 rounded-md" onClick={() => setConfirmOpen(false)}>Cancel</button>
          <button className="button-primary" onClick={() => { setConfirmOpen(false); navigate('/cart') }}>Proceed to cart</button>
        </div>
      </Modal>
    </section>
  )
}
