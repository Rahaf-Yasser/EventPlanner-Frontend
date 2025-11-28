import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../services/event';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  templateUrl: './event-detail.html',
  styleUrls: ['./event-detail.css']
})
export class EventDetailComponent implements OnInit {
  event: any = null;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('eventId');

    if (id) {
      const id = Number(this.route.snapshot.paramMap.get('eventId'));

if (id) {
  this.eventService.getEvent(id).subscribe({
    next: (res) => this.event = res,
    error: () => alert('Event not found')
  });
}

    }
  }

}
