/*
  EventDetail.jsx
  ───────────────
  Page showing detailed information about a single event.
  Fetches data from events.json using the event ID from URL.
*/
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((e) => e.id === Number(id));
        setEvent(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading event details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center text-gray-500 mt-8">Loading...</p>;
  if (!event) return <p className="text-center text-gray-500 mt-8">Event not found.</p>;

  return (
    <section className="space-y-4 pb-16">
      <Link to="/" className="text-blue-500 underline text-sm">
        ← Back to Feed
      </Link>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <img
          src={event.image || "https://placehold.co/600x400?text=PAUSE+Event"}
          alt={event.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4 space-y-2">
          <h2 className="text-2xl font-semibold">{event.title}</h2>
          <p className="text-sm text-gray-500">{event.date}</p>
          <p className="text-gray-700">{event.description}</p>
          <p className="text-sm text-gray-500 italic">{event.location.address}</p>
        </div>
      </div>
    </section>
  );
}

export default EventDetail;
