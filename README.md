# Base44 App (Briblue) — Local & Kodular guide

1) Lancer localement
- npm install
- npm run dev
- Ouvrir http://localhost:5173

2) Build (fichiers statiques)
- npm run build
- Les fichiers sont dans dist/

3) Kodular
- Option simple : utiliser un composant WebViewer et mettre Home URL = https://aqua-pro-gestion-d641464.base44.app/ (ou l'URL de ton site hébergé).
- Option APK : packager dist/ via PWABuilder / Capacitor / Cordova.

Authentification demo :
- Utilisateurs démo :
  - tech@example.com / tech123 (role technician)
  - sec@example.com / sec123 (role secretary)