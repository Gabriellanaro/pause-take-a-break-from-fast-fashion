/*
  EventDetail.jsx
  ───────────────
  Page showing detailed information about a single event.
  Displays title, date, description, and image.
*/

function EventDetail() {
  const { id } = useParams();

  return (
    <section className="space-y-4">
      <Link to="/" className="text-blue-500 underline text-sm">
        ← Back to Feed
      </Link>

      <h2 className="text-lg font-semibold">Event Detail #{id}</h2>
      <p className="text-gray-600">
        This page will display detailed info about the selected event.
      </p>
    </section>
  );
}

export default EventDetail;