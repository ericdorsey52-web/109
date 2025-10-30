import React from 'react'
import { addItem, fetchItems, Item } from '../services/itemService'
import { addCoupon, listCoupons, Coupon, deleteCoupon } from '../services/couponService'

export default function Admin(){
  // products
  const [products, setProducts] = React.useState<Item[]>([])
  const [pname, setPname] = React.useState('')
  const [pdesc, setPdesc] = React.useState('')
  const [pprice, setPprice] = React.useState('')
  const [pimage, setPimage] = React.useState('')

  // coupons
  const [coupons, setCoupons] = React.useState<Coupon[]>([])
  const [code, setCode] = React.useState('')
  const [discount, setDiscount] = React.useState('')
  const [cdesc, setCdesc] = React.useState('')

  React.useEffect(() => {
    fetchItems().then(setProducts)
    listCoupons().then(setCoupons)
  }, [])

  async function handleAddProduct(e: React.FormEvent){
    e.preventDefault()
    const price = Number(pprice) || 0
    const imageUrl = pimage || '/Images/crate_a_t_shirt_with_legacy_horizon.jpg'
    const item = await addItem({ name: pname, description: pdesc, price, imageUrl })
    setProducts(prev => [item, ...prev])
    setPname(''); setPdesc(''); setPprice(''); setPimage('')
  }

  async function handleAddCoupon(e: React.FormEvent){
    e.preventDefault()
    const pct = Math.max(0, Math.min(100, Number(discount) || 0))
    const c = await addCoupon({ code: code.trim(), discountPercent: pct, description: cdesc })
    setCoupons(prev => [c, ...prev])
    setCode(''); setDiscount(''); setCdesc('')
  }

  async function handleDeleteCoupon(id: string){
    await deleteCoupon(id)
    setCoupons(prev => prev.filter(c => c.id !== id))
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Admin</h1>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="font-semibold mb-3">Create product</h2>
          <form onSubmit={handleAddProduct} className="space-y-3">
            <input required value={pname} onChange={e => setPname(e.target.value)} placeholder="Name" className="w-full px-3 py-2 rounded-md bg-slate-800" />
            <input value={pprice} onChange={e => setPprice(e.target.value)} placeholder="Price" className="w-full px-3 py-2 rounded-md bg-slate-800" />
            <input value={pimage} onChange={e => setPimage(e.target.value)} placeholder="Image URL (optional)" className="w-full px-3 py-2 rounded-md bg-slate-800" />
            <textarea value={pdesc} onChange={e => setPdesc(e.target.value)} placeholder="Description" className="w-full px-3 py-2 rounded-md bg-slate-800" />
            <div className="text-right">
              <button className="button-primary" type="submit">Add product</button>
            </div>
          </form>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Products</h3>
            <ul className="space-y-3">
              {products.map(p => (
                <li key={p.id} className="flex items-center gap-3">
                  <img src={p.imageUrl} alt={p.name} className="w-12 h-12 object-cover rounded" />
                  <div className="flex-1">
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-sm text-slate-300/80">${p.price.toFixed(2)}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card">
          <h2 className="font-semibold mb-3">Create coupon</h2>
          <form onSubmit={handleAddCoupon} className="space-y-3">
            <input required value={code} onChange={e => setCode(e.target.value)} placeholder="Code" className="w-full px-3 py-2 rounded-md bg-slate-800" />
            <input value={discount} onChange={e => setDiscount(e.target.value)} placeholder="Discount percent" className="w-full px-3 py-2 rounded-md bg-slate-800" />
            <textarea value={cdesc} onChange={e => setCdesc(e.target.value)} placeholder="Description" className="w-full px-3 py-2 rounded-md bg-slate-800" />
            <div className="text-right">
              <button className="button-primary" type="submit">Add coupon</button>
            </div>
          </form>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Coupons</h3>
            <ul className="space-y-3">
              {coupons.map(c => (
                <li key={c.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{c.code} <span className="text-sm text-slate-300/80">- {c.discountPercent}%</span></div>
                    <div className="text-sm text-slate-300/80">{c.description}</div>
                  </div>
                  <div>
                    <button className="px-3 py-1 rounded-md bg-red-600" onClick={() => handleDeleteCoupon(c.id)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
