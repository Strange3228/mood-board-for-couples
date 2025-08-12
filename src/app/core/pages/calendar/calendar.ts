import { Component, computed, Signal } from '@angular/core';
import { CalendarApiService } from './services/calendar.api.service';
import { DAY_NAMES, ICalendarUIDate, IMonthToShow } from './models/calendar.model';
import { CalendarService } from './services/calendar.service';

@Component({
  selector: 'app-calendar',
  imports: [],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
  providers: [CalendarApiService, CalendarService],
})
export class Calendar {
  public selectedMonth: Signal<IMonthToShow>;

  public dayNames: string[] = DAY_NAMES;
  public calendarUIDays: Signal<ICalendarUIDate[]>;

  constructor(
    private calendarService: CalendarService,
  ) {
    this.calendarUIDays = computed(() =>
      this.calendarService.generateCalendarDays(this.calendarService.getMonthToShow()),
    );
  }
}
