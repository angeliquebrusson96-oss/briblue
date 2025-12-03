import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

// USERS DE DÉMO : remplace par API réelle en production
const demoUsers = {
  'tech@example.com': { password: 'tech123', role: 'technician', name: 'Dorian' },
  'sec@example.com': { password: 'sec123', role: 'secretary', name: 'Sophie' }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('briblue_user')
    if (stored) setUser(JSON.parse(stored))
  }, [])

  function login(email, password) {
    const u = demoUsers[email]
    if (u && u.password === password) {
      const payload = { email, role: u.role, name: u.name }
      setUser(payload)
      localStorage.setItem('briblue_user', JSON.stringify(payload))
      return { ok: true }
    }
    return { ok: false, error: 'Identifiants invalides' }
  }

  function logout() {
    setUser(null)
    localStorage.removeItem('briblue_user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}