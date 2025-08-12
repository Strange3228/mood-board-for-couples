import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { StorageKey, StorageService } from "../../../../shared/services/storage.service";
import { IDailyStats, IMonthToShow } from "../models/calendar.model";

@Injectable()
export class CalendarApiService {
  private monthToShow$: BehaviorSubject<IMonthToShow> = new BehaviorSubject({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });

  constructor(
    private storageService: StorageService,
  ) {
  }

  get getMonthToShow$(): Observable<IMonthToShow> {
    return this.monthToShow$.asObservable();
  }

  set setMonthToShow(data: IMonthToShow) {
    this.monthToShow$.next(data);
  }

  public getStatsForMonth(year: number, month: number): IDailyStats[] {
    return this.storageService.get<IDailyStats[]>(StorageKey.DailyStats).filter(
      (data: IDailyStats) => data.year === year && data.month === month,
    );
  }
}
