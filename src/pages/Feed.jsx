/*
  Feed.jsx
  ─────────
  Main page showing all events in a scrollable feed.
  Fetches data from events.json and displays EventCard components (coming soon).
*/

import React from "react";

import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

function Feed() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch events from JSON file
  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading events:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500 mt-8">Loading events...</p>;
  }

  if (events.length === 0) {
    return <p className="text-center text-gray-500 mt-8">No events found.</p>;
  }

  return (
    <section className="space-y-6 pb-16">
      <h2 className="text-xl font-semibold mb-2">Events Feed</h2>

      <div className="grid gap-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}

export default Feed;

