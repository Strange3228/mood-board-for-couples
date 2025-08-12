import { Component, computed, input, Signal } from '@angular/core';
import { IMonthToShow } from '../models/calendar.model';
import { CommonModule } from '@angular/common';
import { CalendarService } from '../services/calendar.service';

@Component({
  selector: 'app-month-selector',
  imports: [CommonModule],
  templateUrl: './month-selector.html',
  styleUrl: './month-selector.scss'
})
export class MonthSelector {
  public monthToShow = input<IMonthToShow>();
  public monthAsDate: Signal<Date | undefined> = computed(() => {
    if (this.monthToShow()) {
      return new Date(
        this.monthToShow()?.year!,
        this.monthToShow()?.month!,
      );
    } else return undefined;
  });

  constructor(
    private calendarService: CalendarService,
  ) {}

  public nextMonth() {
    this.calendarService.changeMonthToNext();
  }

  public prevMonth() {
    this.calendarService.changeMonthToPrev();
  }
}
