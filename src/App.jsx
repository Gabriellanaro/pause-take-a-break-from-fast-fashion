/*
  App.jsx
  ────────
  Root component of the PAUSE web app.
  Defines routes (Feed, Map, EventDetail) using React Router.
  Handles global layout (Header, etc.).
*/

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import pages
import Feed from "./pages/Feed";
import Map from "./pages/Map";
import EventDetail from "./pages/EventDetail";

// Import components
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Header - visibile su tutte le pagine */}
        <Header />

        {/* Main Content */}
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/map" element={<Map />} />
            <Route path="/event/:id" element={<EventDetail />} />
          </Routes>
        </main>

        {/* Simple footer nav - per ora basica */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2">
          <Link to="/" className="text-blue-500">Feed</Link>
          <Link to="/map" className="text-blue-500">Map</Link>
        </nav>
      </div>
    </Router>
  );
}

export default App;
