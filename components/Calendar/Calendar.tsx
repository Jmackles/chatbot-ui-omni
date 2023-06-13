import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.date);
  };

  const handleEventClick = (info) => {
    alert('Event: ' + info.event.title + '\n' + 'Start: ' + info.event.start.toISOString());
  };
  

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const deleteEvent = (eventId) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  const updateEvent = (updatedEvent) => {
    setEvents(events.map(event => event.id === updatedEvent.id ? updatedEvent : event));
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        className="rounded"
      />
    </div>
  );
};
