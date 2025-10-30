import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Catalog from './pages/Catalog'
import Home from './pages/Home'
import CartPage from './pages/Cart'
import About from './pages/About'
import Admin from './pages/Admin'
import SignIn from './pages/SignIn'
import { CartProvider } from './context/CartContext'

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 container py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
