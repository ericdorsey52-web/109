import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignIn(){
  const navigate = useNavigate()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    // mock sign in - just navigate back to catalog
    navigate('/catalog')
  }

  return (
    <div className="max-w-md mx-auto card">
      <h1 className="text-2xl font-bold mb-4">Sign in to Legacy Horizons</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-slate-300/80">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-md bg-slate-800" type="email" required />
        </div>
        <div>
          <label className="block text-sm text-slate-300/80">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-md bg-slate-800" type="password" required />
        </div>
        <div className="text-right">
          <button className="button-primary" type="submit">Sign in</button>
        </div>
      </form>
    </div>
  )
}
