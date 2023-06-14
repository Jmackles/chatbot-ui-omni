import React, { createContext, ReactNode } from 'react';
import useCalendarState from './Calendar.state';

const CalendarContext = createContext<ReturnType<typeof useCalendarState> | null>(null);

export const CalendarProvider = ({ children }: { children: ReactNode }) => {
  const calendarState = useCalendarState();
  return (
    <CalendarContext.Provider value={calendarState}>
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContext;
