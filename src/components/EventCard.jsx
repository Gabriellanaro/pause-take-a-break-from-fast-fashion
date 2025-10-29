/*
  EventCard.jsx
  ─────────────
  Component that displays a single event summary (image, title, date, short description).
  Used inside the Feed page.
*/
import React from "react";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200">
      {/* Image */}
      <div className="h-48 bg-gray-100">
        <img
          src={event.image || "https://placehold.co/600x400?text=PAUSE+Event"}
          alt={event.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
        <p className="text-sm text-gray-500">{event.date}</p>
        <p className="text-gray-700 text-sm line-clamp-2">
          {event.description}
        </p>

        <div className="pt-2">
          <Link
            to={`/event/${event.id}`}
            className="inline-block text-blue-600 text-sm font-medium hover:underline"
          >
            View details →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
