import { Injectable, signal, Signal, WritableSignal } from "@angular/core";
import { ICalendarUIDate, IMonthToShow, MonthPositionAccordingToCurrent } from "../models/calendar.model";
import { getDayIndexInWeekStartsWithMonday } from "../../../../shared/utils/date-calculations.util";

@Injectable()
export class CalendarService {
  private monthToShow: WritableSignal<IMonthToShow> = signal({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });

  get getMonthToShow(): Signal<IMonthToShow> {
    return this.monthToShow;
  }

  set setMonthToShow(data: IMonthToShow) {
    this.monthToShow.set(data);
  }

  public generateCalendarDays({ year, month }: IMonthToShow): ICalendarUIDate[] {
    const firstDayInMonthIndex = getDayIndexInWeekStartsWithMonday(
      new Date(year, month, 1).getDay()
    );
    const numberOfDaysInMonth = new Date(year, month + 1, 0).getDate();

    let numberOfDaysInMonthBefore = new Date(year, month, 0).getDate();
    let calendarDays: ICalendarUIDate[] = [];

    const monthBeforeArray: ICalendarUIDate[] = Array(firstDayInMonthIndex)
      .fill(null)
      .map(() => ({
        monthPos: MonthPositionAccordingToCurrent.Last,
        index: numberOfDaysInMonthBefore--,
      }))
      .reverse();

    calendarDays = monthBeforeArray.concat(Array(numberOfDaysInMonth).fill(null).map((_, i) => ({
      monthPos: MonthPositionAccordingToCurrent.Current,
      index: i + 1,
    })));

    let counter = 1;
    while (calendarDays.length % 7 !== 0) {
      calendarDays.push({
        monthPos: MonthPositionAccordingToCurrent.Next,
        index: counter,
      });
      counter++;
    }

    return calendarDays;
  }
}
