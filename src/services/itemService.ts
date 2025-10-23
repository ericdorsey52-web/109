export type Item = {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
}

const items: Item[] = [
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

export function fetchItems(): Promise<Item[]>{
  // emulate async
  return new Promise((res) => setTimeout(() => res(items), 200))
}
