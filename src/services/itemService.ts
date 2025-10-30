export type Item = {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
}

const DEFAULT_ITEMS: Item[] = [
  {
    id: 'power-tee',
    name: 'Power Tee',
    description: 'Breathable, quick-dry tee for high-intensity workouts. Urban cut with reflective accents.',
    price: 29.99,
    imageUrl: '/Images/crate_a_t_shirt_with_legacy_horizon.jpg'
  },
  {
    id: 'urban-leggings',
    name: 'Urban Leggings',
    description: 'Compression leggings with a sleek streetwear look, four-way stretch and hidden pocket.',
    price: 54.99,
    imageUrl: '/Images/crate_a_legging_for_men_with_legacy.jpg'
  },
  {
    id: 'training-hoodie',
    name: 'Training Hoodie',
    description: 'Cozy yet lightweight hoodie designed for warm-ups and commutes.',
    price: 69.99,
    imageUrl: '/Images/crate_a_training_hoodie_both_women_and.jpg'
  },
  {
    id: 'stride-shorts',
    name: 'Stride Shorts',
    description: 'Lightweight running shorts with breathable mesh and secure waistband.',
    price: 34.5,
    imageUrl: '/Images/crate_a_training_shorts_both_women_and.jpg'
  }
]

const STORAGE_KEY = 'lh_products'

let items: Item[] = (() => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return DEFAULT_ITEMS.slice()
})()

function persist(){
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)) } catch {}
}

export function fetchItems(): Promise<Item[]>{
  // emulate async
  return new Promise((res) => setTimeout(() => res(items.slice()), 200))
}

export function addItem(newItem: Omit<Item,'id'>): Promise<Item>{
  const id = (newItem.name || 'item').toLowerCase().replace(/[^a-z0-9]+/g,'-') + '-' + Date.now().toString(36)
  const item: Item = { id, ...newItem }
  items.push(item)
  persist()
  return Promise.resolve(item)
}
