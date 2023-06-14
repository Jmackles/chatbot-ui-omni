import { useState } from 'react';

const useCalendarState = () => {
  const [currentView, setCurrentView] = useState('month');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [startOfWeek, setStartOfWeek] = useState('Sunday');
  const [timeFormat, setTimeFormat] = useState('12-hour');
  const [eventColor, setEventColor] = useState('#3788d8');

  return {
    currentView,
    setCurrentView,
    currentDate,
    setCurrentDate,
    events,
    setEvents,
    startOfWeek,
    setStartOfWeek,
    timeFormat,
    setTimeFormat,
    eventColor,
    setEventColor,
  };
};

export default useCalendarState;
