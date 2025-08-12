export enum MonthPositionAccordingToCurrent {
  Last = 'last',
  Current = 'current',
  Next = 'next',
}

export enum DayName {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

export interface IDailyStats {
  year: number,
  month: number,
  day: number,
  data: {
    heScore: number,
    sheScore: number,
  },
}

export interface IMonthToShow {
  year: number,
  month: number,
}

export interface ICalendarUIDate {
  monthPos: MonthPositionAccordingToCurrent,
  index: number,
}

export const DAY_NAMES = [
  DayName.Monday,
  DayName.Tuesday,
  DayName.Wednesday,
  DayName.Thursday,
  DayName.Friday,
  DayName.Saturday,
  DayName.Sunday,
]
