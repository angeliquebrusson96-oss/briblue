import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, AuthContext } from './AuthProvider'
import Login from './pages/Login'
import TechDashboard from './pages/TechDashboard'
import SecretaryDashboard from './pages/SecretaryDashboard'
import './index.css'

function RequireAuth({ children, role }) {
  const { user } = useContext(AuthContext)
  if (!user) return <Navigate to="/login" replace />
  if (role && user.role !== role) {
    // si rôle incorrect, rediriger vers sa page
    return <Navigate to={user.role === 'technician' ? '/tech' : '/secretary'} replace />
  }
  return children
}

export default function AppRouter() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/tech" element={
            <RequireAuth role="technician">
              <TechDashboard />
            </RequireAuth>
          } />
          <Route path="/secretary" element={
            <RequireAuth role="secretary">
              <SecretaryDashboard />
            </RequireAuth>
          } />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}