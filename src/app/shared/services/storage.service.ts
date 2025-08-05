import { Injectable } from "@angular/core";

export enum StorageKey {
    PlaceholderKey = 'PlaceholderKey',
}

@Injectable({
    providedIn: "root",
})
export class StorageService {
    public set<T>(key: StorageKey, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public get<T>(key: StorageKey): T {
        return localStorage.getItem(key as string) as T;
    }

    public delete(key: StorageKey): void {
        localStorage.removeItem(key);
    }
}