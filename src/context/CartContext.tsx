import React from 'react'

type CartMap = Record<string, number>

type CartContextType = {
  cart: CartMap
  setQuantity: (id: string, qty: number) => void
  getQuantity: (id: string) => number
  clear: () => void
}

const CartContext = React.createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = React.useState<CartMap>(() => {
    try {
      const raw = localStorage.getItem('lh_cart')
      return raw ? JSON.parse(raw) : {}
    } catch {
      return {}
    }
  })

  function setQuantity(id: string, qty: number){
    setCart(prev => {
      if (qty <= 0){
        const { [id]: _, ...rest } = prev
        return rest
      }
      return { ...prev, [id]: qty }
    })
  }

  React.useEffect(() => {
    try { localStorage.setItem('lh_cart', JSON.stringify(cart)) } catch {}
  }, [cart])

  function getQuantity(id: string){
    return cart[id] ?? 0
  }

  function clear(){ setCart({}) }

  return (
    <CartContext.Provider value={{ cart, setQuantity, getQuantity, clear }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(){
  const ctx = React.useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}

export default CartContext
