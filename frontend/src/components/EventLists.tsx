import React, { useEffect, useState } from "react";

interface Event {
  id: number;
  name: string;
  date: string;
  info: string;
}

export const EventLists: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const mockEvents: Event[] = [
      { id: 1, name: "Tech Meetup Tokyo", date: "2025-11-10", info: "Shibuya" },
      { id: 2, name: "Startup Pitch Night", date: "2025-12-05", info: "Roppongi Hills" },
      { id: 3, name: "AI Conference 2026", date: "2026-01-15", info: "Shinjuku" },
    ];
    setEvents(mockEvents);
  }, []);

  return (
    <>
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
           Event Attendance App
      </h1>
      <ul className="bg-white rounded-xl shadow divide-y divide-gray-200 max-w-3xl mx-auto">
        {events.map((event) => (
          <li key={event.id} className="p-4 hover:bg-gray-50 transition">
            <div className="font-semibold text-gray-900">{event.name}</div>
            <div className="text-sm text-gray-600">
              📅 {event.date} | 📍 {event.info}
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default EventLists;
