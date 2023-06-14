// CalendarView.context.tsx
import { createContext, useContext } from 'react';
import { CalendarViewState } from './CalendarView.state';

export const CalendarViewContext = createContext<CalendarViewState | null>(null);

export function useCalendarViewContext() {
  const context = useContext(CalendarViewContext);
  if (!context) {
    throw new Error('useCalendarViewContext must be used within a CalendarViewContext.Provider');
  }
  return context;
}