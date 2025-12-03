import React from 'react'

function Header() {
  return (
    <header className="header-brand">
      <div className="logo-badge">B</div>
      <div>
        <h1 className="h1">Base44 App</h1>
        <p className="lead text-sm">Prototype • Briblue</p>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="card mt-6">
      <h2 className="text-2xl font-semibold mb-2">Bienvenue</h2>
      <p className="text-neutral-600 mb-4">
        Voici un squelette d'application avec Tailwind CSS. J'ai respecté l'esthétique neutre et élégante indiquée dans components.json : palette de gris, typographie soignée et un accent bleu pour le branding.
      </p>
      <div className="flex gap-3">
        <button className="btn-primary">Commencer</button>
        <button className="px-4 py-2 rounded-md border border-neutral-200">En savoir plus</button>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <Hero />
        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="font-semibold mb-2">Carte</h3>
            <p className="text-neutral-600">Contenu de démonstration.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">Statistiques</h3>
            <p className="text-neutral-600">Graphes et métriques ici.</p>
          </div>
        </section>
      </main>
    </div>
  )
}