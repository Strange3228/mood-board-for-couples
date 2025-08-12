import { Component, OnDestroy, OnInit } from '@angular/core';
import { CalendarApiService } from './services/calendar.api.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { DAY_NAMES, ICalendarUIDate, IMonthToShow, MonthPositionAccordingToCurrent } from './models/calendar.model';
import { CalendarService } from './services/calendar.service';

@Component({
  selector: 'app-calendar',
  imports: [],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
  providers: [CalendarApiService, CalendarService],
})
export class Calendar implements OnInit, OnDestroy {
  public selectedMonth$: Observable<IMonthToShow>;

  public dayNames: string[] = DAY_NAMES;
  public calendarUIDays: ICalendarUIDate[] = [];

  private destroySubject$: Subject<void> = new Subject();

  constructor(
    private calendarApi: CalendarApiService,
    private calendarService: CalendarService,
  ) {
    this.selectedMonth$ = this.calendarApi.getMonthToShow$;
  }

  public ngOnInit(): void {
    this.selectedMonth$.pipe(takeUntil(this.destroySubject$)).subscribe(
      (value: IMonthToShow) => {
        this.calendarUIDays = this.calendarService.generateCalendarDays(value);
      }
    );
  }

  public ngOnDestroy(): void {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }
}
