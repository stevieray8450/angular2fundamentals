import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { EventsAppComponent } from './events-app.component';

import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/events-thumbnail.component';

import { NavbarComponent } from './nav/navbar.component';
import { EventDetailsComponent } from './events/events-details/event-details.component';
import { EventsService } from './events/shared/events.service';
import { JQ_TOKEN,
TOASTR_TOKEN, Toastr,
CollapsibleWellComponent,
SimpleModalComponent } from './common/index';
import { appRoutes } from './routes';
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivatorService } from "./events/events-details/event-route-activator.service";
import { EventsListResolverService } from "./events/shared/events-list-resolver.service"
import { IEvent, ISession } from './events/shared/event.model'
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CreateSessionComponent } from "./events/events-details/create-session.component";
import { SessionListComponent } from "./events/events-details/session-list.component";
import { DurationPipe } from "./events/shared/duration.pipe";

declare let toastr : Toastr
declare let jQuery: Object;

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes) ],
  declarations: [ 
    EventsAppComponent, 
    EventsListComponent,
    EventThumbnailComponent, 
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    Error404Component,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    DurationPipe ],
  providers: [
    EventsService, 
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventRouteActivatorService,
    EventsListResolverService,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState     
    }],
  bootstrap: [ EventsAppComponent ]
})
export class AppModule { }

function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, Do you really want to cancel?') 

  return true
}