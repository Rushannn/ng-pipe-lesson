import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  dateObject: Date = new Date();
  timestamp: number = Date.now();
  dateString: string = '2022-02-19'
}
