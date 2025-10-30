export type Coupon = {
  id: string
  code: string
  discountPercent: number
  description?: string
}

const KEY = 'lh_coupons'

let coupons: Coupon[] = (() => {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return []
})()

function persist(){
  try { localStorage.setItem(KEY, JSON.stringify(coupons)) } catch {}
}

export function listCoupons(): Promise<Coupon[]>{
  return Promise.resolve(coupons.slice())
}

export function addCoupon(payload: Omit<Coupon,'id'>): Promise<Coupon>{
  const id = (payload.code || 'coupon').toLowerCase().replace(/[^a-z0-9]+/g,'-') + '-' + Date.now().toString(36)
  const c: Coupon = { id, ...payload }
  coupons.push(c)
  persist()
  return Promise.resolve(c)
}

export function deleteCoupon(id: string): Promise<void>{
  coupons = coupons.filter(c => c.id !== id)
  persist()
  return Promise.resolve()
}
