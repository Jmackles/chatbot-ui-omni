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

interface CalendarSettings {
  view: string;
  startOfWeek: string;
  timeFormat: string;
  eventColor: string;
}

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events, setEvents] = useState<any[]>([]);
  const [settings, setSettings] = useState<CalendarSettings>({
    view: 'month',
    startOfWeek: 'Sunday',
    timeFormat: '12-hour',
    eventColor: '#000000',
  });

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
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView={settings.view}
        firstDay={settings.startOfWeek === 'Sunday' ? 0 : 1}
        slotDuration="00:30:00"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay',
        }}
        dayMaxEvents={true}
        weekends={true}
        events={events}
        dateClick={handleDateClick}
        eventClick={info => handleEventClick(info as EventClickArg)}
      />
    </div>
  );
};
