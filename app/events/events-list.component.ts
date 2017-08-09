import { Component, OnInit } from '@angular/core';

import { EventsService } from './shared/events.service'

@Component({
    selector: 'events-list',
    template:  `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr /> 
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail [event]="event"></event-thumbnail>
    </div>
    `,
    styles: [`
    .well div { color: red }
    `]
})

export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventsService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}