// CalendarView.state.tsx
import React, { useState, useMemo, ReactNode } from 'react';
import { CalendarViewContext } from './CalendarView.context';
import { CalendarViewActions, calendarViewReducer } from './CalendarView.reducer';

export interface CalendarViewState {
  isCalendarOpen: boolean;
  dispatch: (action: CalendarViewActions) => void;
}

export function CalendarViewStateProvider({ children }: { children: ReactNode }) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const dispatch = (action: CalendarViewActions) => {
    setIsCalendarOpen((prevState) => calendarViewReducer(prevState, action));
  };
  const value = useMemo(() => ({ isCalendarOpen, dispatch }), [isCalendarOpen]);
  return (
    <CalendarViewContext.Provider value={value}>
      {children}
    </CalendarViewContext.Provider>
  );
}
