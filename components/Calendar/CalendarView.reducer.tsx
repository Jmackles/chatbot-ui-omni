export type CalendarViewActions = "open" | "close" | "toggle";

export function calendarViewReducer(state: boolean, action: CalendarViewActions): boolean {
  switch (action) {
    case "open":
      return true;
    case "close":
      return false;
    case "toggle":
      return !state;
    default:
      return state;
  }
}
