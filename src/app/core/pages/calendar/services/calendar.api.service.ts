import { Injectable } from "@angular/core";
import { StorageKey, StorageService } from "../../../../shared/services/storage.service";
import { IDailyStats } from "../models/calendar.model";

@Injectable()
export class CalendarApiService {
  constructor(
    private storageService: StorageService,
  ) {
  }

  public getStatsForMonth(year: number, month: number): IDailyStats[] {
    return this.storageService.get<IDailyStats[]>(StorageKey.DailyStats).filter(
      (data: IDailyStats) => data.year === year && data.month === month,
    );
  }
}
