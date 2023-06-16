import React, { useState } from 'react';
import CalendarContext from './Calendar.context';

interface CalendarState {
  currentView: string;
  selectedDate: Date | null;
  events: any[];
}

interface CalendarProviderProps {
  children: React.ReactNode;
}

export const CalendarProvider = ({ children }: CalendarProviderProps) => {
  const [currentView, setCurrentView] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events, setEvents] = useState<any[]>([]);

  return (
    <CalendarContext.Provider
      value={{
        currentView,
        setCurrentView,
        selectedDate,
        setSelectedDate,
        events,
        setEvents,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
