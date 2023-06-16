import { createContext, ReactNode } from 'react';
import { useCalendarState } from './Calendar.state';

const CalendarContext = createContext<any>({});

export default CalendarContext;

export const CalendarProvider = ({ children }: { children: ReactNode }) => {
  const calendarState = useCalendarState();
  return (
    <CalendarContext.Provider value={calendarState}>
      {children}
    </CalendarContext.Provider>
  );
};
