import { Component } from '@angular/core';
import { Calendar } from './core/pages/calendar/calendar';

@Component({
  selector: 'app-root',
  imports: [Calendar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
