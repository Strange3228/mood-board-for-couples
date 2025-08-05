import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StorageKey, StorageService } from './shared/services/storage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
