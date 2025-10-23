import React from 'react'
import { Link } from 'react-router-dom'
import { fetchItems, Item } from '../services/itemService'
// presentational home list — no interactive controls

export default function Home(){
  const [items, setItems] = React.useState<Item[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    fetchItems().then(list => { setItems(list); setLoading(false) })
  }, [])

  return (
    <div className="space-y-8">
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">Legacy Horizons</h1>
          <p className="text-slate-300/80 text-lg">Urban activewear that helps you push harder, recover faster, and feel confident while you move. Join our community and find gear built to last.</p>
          <div className="flex gap-3 mt-4">
            <Link to="/catalog" className="button-primary">Shop the catalog</Link>
            <Link to="/about" className="px-4 py-2 rounded-md border border-slate-700 text-sm">Our story</Link>
          </div>
        </div>
        <div className="order-first md:order-last">
          <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <img src="/Images/crate_a_legging_for_men_with_legacy.jpg" alt="hero" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        {loading ? (
          <div>Loading…</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {items.map(it => (
              <div key={it.id} className="card flex gap-4 items-start">
                <div className="w-28 h-28 flex-shrink-0 overflow-hidden rounded-lg">
                  <img src={it.imageUrl} alt={it.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-semibold">{it.name}</h3>
                    <div className="text-sm text-slate-300/80">${it.price.toFixed(2)}</div>
                  </div>
                  <p className="text-sm text-slate-300/80 mt-1">{it.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
