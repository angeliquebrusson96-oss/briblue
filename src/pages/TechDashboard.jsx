import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider'

export default function TechDashboard() {
  const { user, logout } = useContext(AuthContext)
  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="header-brand">
        <div className="logo-badge">T</div>
        <div>
          <h1 className="h1">Espace Technicien</h1>
          <p className="lead">Bonjour {user?.name}</p>
        </div>
        <div className="ml-auto">
          <button onClick={logout} className="px-3 py-2 border rounded">Se déconnecter</button>
        </div>
      </header>
      <main className="max-w-4xl mx-auto p-6">
        <div className="card">
          <h2 className="font-semibold">Mes interventions</h2>
          <p className="text-neutral-600">Liste des interventions et formulaires pour techniciens.</p>
        </div>
      </main>
    </div>
  )
}