/*
  MapComponent.jsx
  ─────────────────
  Displays interactive map (React Leaflet) showing event markers.
  Fetches data from /data/events.json and renders one marker per event.
*/

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for missing default marker icons in Leaflet (important)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

function MapComponent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error loading events for map:", err));
  }, []);

  const center = [55.6761, 12.5683]; // Copenhagen center coordinates

  return (
    <MapContainer
      center={center}
      zoom={12}
      className="h-[80vh] w-full rounded-xl border border-gray-200"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {events.map((event) => (
        <Marker
          key={event.id}
          position={[event.location.lat, event.location.lng]}
        >
          <Popup>
            <div className="space-y-1">
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.date}</p>
              <Link
                to={`/event/${event.id}`}
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                View details →
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapComponent;
