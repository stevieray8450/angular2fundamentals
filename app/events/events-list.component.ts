import { Component, OnInit } from '@angular/core'
import { EventsService } from './shared/events.service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared/event.model'

@Component({
    template:  `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr /> 
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail (click)="handleThumbnailClickEvent(event.name)" 
        [event]="event"></event-thumbnail>
    </div>
    `
})

export class EventsListComponent implements OnInit {
  events: IEvent[]
  constructor(private eventService: EventsService, private toastrService: ToastrService,
  private route: ActivatedRoute ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClickEvent(eventName) {
    this.toastrService.success(eventName)
  }
}