import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/events-details/event-details.component'
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivatorService } from "./events/events-details/event-route-activator.service";
import { EventsListResolverService } from "./events/shared/events-list-resolver.service";
import { CreateSessionComponent } from "./events/events-details/create-session.component";

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent,
    resolve: {events:EventsListResolverService} },
    { path: 'events/:id', component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService] },
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: '404', component: Error404Component },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule'},
    { path: 'events/session/new', component: CreateSessionComponent}
]