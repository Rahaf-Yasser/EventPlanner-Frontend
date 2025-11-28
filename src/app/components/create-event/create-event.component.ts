import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventsService } from '../../services/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  standalone: true,
  templateUrl: './create-event.html',
  styleUrls: ['./create-event.css'],
  imports: [FormsModule, CommonModule]
})
export class CreateEventComponent {
  title = '';
  date = '';
  time = '';
  location = '';
  description = '';
  error = '';

  constructor(private eventService: EventsService, private router: Router) {}

  onCreate() {
    const start_datetime = `${this.date} ${this.time}`;

    const data = {
      title: this.title,
      description: this.description,
      location: this.location,
      start_datetime,
      end_datetime: start_datetime // temporary until you add end-date
    };

    this.eventService.createEvent(data).subscribe({
      next: () => this.router.navigate(['/events']),
      error: (err) => this.error = err.error?.message || 'Error creating event'
    });
  }
}
