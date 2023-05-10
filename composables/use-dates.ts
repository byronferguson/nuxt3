import {
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  getYear,
  startOfMonth,
  startOfToday,
} from 'date-fns';

export interface TodayDates {
  date: Date;
  year: string;
  month: string;
  day: string;
  time: string;
}

export interface WeekDates {
  endDate: Date;
}

export interface NextMonthDates {
  startDate: Date;
  endDate: Date;
}

export function useDates() {
  const today = {
    date: startOfToday(),
    year: format(startOfToday(), 'yyyy'),
    month: format(startOfToday(), 'MM'),
    day: format(startOfToday(), 'dd'),
    time: format(new Date(), 'HH:mm:ss'),
  };

  const week = {
    endDate: endOfWeek(startOfToday()),
  };

  const nextMonth = {
    startDate: startOfMonth(addMonths(new Date(), 1)),
    endDate: endOfMonth(addMonths(new Date(), 1)),
  };

  function getXYearsFromToday(count: number): number[] {
    const currentYear = getYear(new Date());

    return Array.from({ length: count + 1 }, (_, i) => currentYear + i);
  }

  return {
    today,
    week,
    nextMonth,
    getXYearsFromToday,
    format,
  };
}
