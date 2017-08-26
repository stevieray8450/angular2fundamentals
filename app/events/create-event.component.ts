import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from "./shared/events.service";


@Component({
    templateUrl: 'app/events/create-event.component.html',
    styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
  `]
})

export class CreateEventComponent {
    isDirty: boolean = true;
    constructor(private router: Router, private eventService: EventsService) {}

   
    cancelButtonClick() {
        this.router.navigate(['/events']);
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);        
    }
}