import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  async function onSubmit(e) {
    e.preventDefault()
    const res = login(email.trim(), password)
    if (res.ok) {
      // redirige selon rôle
      const stored = JSON.parse(localStorage.getItem('briblue_user'))
      if (stored.role === 'technician') navigate('/tech')
      else navigate('/secretary')
    } else {
      setError(res.error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 p-4">
      <form onSubmit={onSubmit} className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Se connecter</h2>
        <label className="block mb-2">
          <div className="text-sm">Email</div>
          <input className="w-full border rounded px-3 py-2" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label className="block mb-4">
          <div className="text-sm">Mot de passe</div>
          <input type="password" className="w-full border rounded px-3 py-2" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        {error && <div className="text-red-600 mb-2">{error}</div>}
        <div className="flex justify-between items-center">
          <button className="btn-primary" type="submit">Connexion</button>
          <div className="text-sm text-neutral-600">Accès démo: tech@example.com / tech123 — sec@example.com / sec123</div>
        </div>
      </form>
    </div>
  )
}