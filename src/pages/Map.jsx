/*
  Map.jsx
  ───────
  Main page displaying the map view of all events.
  Uses MapComponent to show event markers.
*/

import React from "react";
import MapComponent from "../components/MapComponent";

function Map() {
  return (
    <section className="space-y-4 pb-16">
      <h2 className="text-xl font-semibold mb-2">Events Map</h2>
      <MapComponent />
    </section>
  );
}

export default Map;
