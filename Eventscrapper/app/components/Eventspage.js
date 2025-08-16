'use client';

import { useEffect, useState } from 'react';

export default function EventsPage() {
  const [email, setEmail] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://allevents.in/scripts/ae_event_plugin_widget.js';
    script.async = true;

    script.onload = () => {
      if (window.EventWidget) {
        window.EventWidget.init('vue-widget-container', {
          cityName: 'Chicago',
          category: 'All Events',
          coordinates: {
            latitude: 23.033863,
            longitude: 72.585022
          },
          radius: 1,
          sort: 0,
          showHeading: true
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedEvent && email) {
      window.location.href = 'https://allevents.in';
    }
  };

  return (
    <div className="events-page">
      <style jsx>{`
        .events-title {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 20px;
          color:white;
          text-align: center;
        }

        .loading,
        .error,
        .redirecting {
          font-size: 18px;
          color: #555;
          text-align: center;
        }

        .error {
          color: red;
        }

        .ticket-form {
          margin-top: 20px;
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }

        .ticket-form input {
          flex: 1;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          max-width: 300px;
        }

        .ticket-form button {
          background-color: #16a34a;
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .ticket-form button:hover {
          background-color: #15803d;
        }
      `}</style>

      <h1 className="events-title">Event List</h1>

      {error && (
        <p className="error">
          Sorry, we couldnot load the data right now. Please try again or check your connection.
        </p>
      )}

      {/* AllEvents Widget Container */}
      <div id="vue-widget-container"></div>

      {/* Optional ticket form (if you plan to use it) */}
      {selectedEvent && (
        <form className="ticket-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit & Redirect</button>
        </form>
      )}
    </div>
  );
}
