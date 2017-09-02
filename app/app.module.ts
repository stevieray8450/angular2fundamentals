import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { EventsAppComponent } from './events-app.component';

import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/events-thumbnail.component';

import { NavbarComponent } from './nav/navbar.component';
import { EventDetailsComponent } from './events/events-details/event-details.component';
import { EventsService } from './events/shared/events.service';
import { ToastrService } from './common/toastr.service';
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

@NgModule({
    imports:  [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavbarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        CreateSessionComponent,
        SessionListComponent,
        Error404Component
    ],
    providers: [
        EventsService,
        ToastrService,
        EventRouteActivatorService,
        EventsListResolverService,
        { 
            provide: 'canDeactivateCreateEvent', 
            useValue: checkDirtyState
        },
        AuthService
    ],
    bootstrap: [EventsAppComponent]
})

export class AppModule {}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event. Do you want to cancel?')
    return true
} 