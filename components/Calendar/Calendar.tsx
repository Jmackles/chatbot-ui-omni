import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventClickArg } from '@fullcalendar/core';

interface DateClickArg {
  date: Date;
  dateStr: string;
  allDay: boolean;
}

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events, setEvents] = useState<any[]>([]);

  const handleDateClick = (arg: DateClickArg) => {
    setSelectedDate(arg.date);
  };

  const handleEventClick = (info: EventClickArg) => {
    if (info.event.start) {
      alert('Event: ' + info.event.title + '\n' + 'Start: ' + info.event.start.toISOString());
    }
  };

  const addEvent = (event: any) => {
    setEvents([...events, event]);
  };

  const deleteEvent = (eventId: string) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  const updateEvent = (updatedEvent: any) => {
    setEvents(events.map(event => event.id === updatedEvent.id ? updatedEvent : event));
  };

  useEffect(() => {
    // Add any necessary side effects here.
  }, [events]);

  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="rounded">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          eventClick={(info) =>
            handleEventClick(info as EventClickArg)
          }
        />
      </div>
    </div>
  );
};
