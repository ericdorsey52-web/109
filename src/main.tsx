import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Welcome to the app</div>} />
    </Routes>
  )
}

export default App
