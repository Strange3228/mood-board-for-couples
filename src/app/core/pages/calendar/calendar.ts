import { Component, computed, Signal } from '@angular/core';
import { CalendarApiService } from './services/calendar.api.service';
import { DAY_NAMES, ICalendarUIDate, IMonthToShow, MonthPositionAccordingToCurrent } from './models/calendar.model';
import { CalendarService } from './services/calendar.service';
import { MonthSelector } from './month-selector/month-selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  imports: [MonthSelector, CommonModule],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
  providers: [CalendarApiService, CalendarService],
})
export class Calendar {
  public selectedMonth: Signal<IMonthToShow>;

  public dayNames: string[] = DAY_NAMES;
  public calendarUIDays: Signal<ICalendarUIDate[]>;
  public monthPos: typeof MonthPositionAccordingToCurrent = MonthPositionAccordingToCurrent;

  constructor(
    public calendarService: CalendarService,
  ) {
    this.calendarUIDays = computed(() =>
      this.calendarService.generateCalendarDays(this.calendarService.getMonthToShow()),
    );
  }
}
