# 🛍️ PAUSE – Take a Break from Fast Fashion

**pause.** è una piattaforma digitale che centralizza tutti gli eventi di **secondhand shopping** a Copenhagen - dai mercatini vintage ai rack spontanei fuori casa.  
L’obiettivo è rendere la cultura del riuso più accessibile, sostenibile e sociale.

---

## 🚀 MVP Overview

Questo repository contiene la **versione MVP (Minimum Viable Product)** di PAUSE:  
una **Single Page Application (SPA)** sviluppata in **React + Vite**, con una mappa interattiva e un feed dinamico.

### 🎯 Funzionalità attuali
- 🌍 Mappa interattiva con eventi secondhand (React Leaflet)
- 📰 Feed dinamico con eventi caricati da file JSON
- 🔍 Pagina dettaglio evento con informazioni complete
- 📱 UI responsive, moderna e mobile-first
- 🔄 Navigazione fluida tra Feed / Map / Event Detail (React Router)

---

## ⚙️ Tech Stack

| Ambito | Tecnologie |
|:-------|:------------|
| **Frontend Framework** | [React](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Routing** | [React Router DOM](https://reactrouter.com/) |
| **Mappe** | [React Leaflet](https://react-leaflet.js.org/) + [OpenStreetMap](https://www.openstreetmap.org/) |
| **Stile** | [TailwindCSS](https://tailwindcss.com/) |
| **Mock Database** | `public/data/events.json` |
| **Build & Dev Server** | Vite |
| **Hosting (consigliato)** | [Vercel](https://vercel.com/) o [Netlify](https://www.netlify.com/) |

---

## 🧩 Componenti chiave

| Componente | Funzione |
|-------------|----------|
| **Header.jsx** | Mostra il titolo dell’app e rimane fisso |
| **EventCard.jsx** | Visualizza le info base di un evento nel feed |
| **MapComponent.jsx** | Mostra la mappa e i marker dinamici |
| **EventDetail.jsx** | Visualizza i dettagli di un singolo evento |
| **App.jsx** | Gestisce il routing e il layout generale |

---

## 🧠 Logica generale

- Tutti i dati provengono dal file `events.json`
- Le pagine vengono gestite dal router, ma la SPA non ricarica mai la pagina
- React aggiorna solo le sezioni che cambiano (Feed, Map o Event Detail)
- Leaflet gestisce la visualizzazione geografica tramite coordinate `lat` e `lng`

---

## 🔮 Roadmap Tecnologica

### 🧩 **Fase 1 – Backend e Database**
- Passaggio da `events.json` a **Supabase** o **Firebase**
- API REST per leggere/scrivere eventi

### 🔐 **Fase 2 – Upload e Autenticazione**
- Aggiunta login (Google / MobilePay)
- Form per creare nuovi eventi
- Upload immagini su cloud storage

### 🕒 **Fase 3 – Realtime e Filtri**
- Aggiornamento in tempo reale
- Filtri per zona, data, tipo di evento

### 💬 **Fase 4 – Social e Notifiche**
- Notifiche per eventi vicini
- PWA installabile sul telefono
- Integrazione con Geolocation API

### 🎨 **Fase 5 – UI/UX Refinement**
- Nuova palette “PAUSE”: beige / sabbia / verde oliva
- Animazioni fluide (Framer Motion)
- Marker personalizzati sulla mappa

---

## 🧰 Comandi principali

```bash
# installa le dipendenze
npm install

# avvia il server di sviluppo
npm run dev

# builda per la produzione
npm run build

# anteprima della build
npm run preview
