import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';

import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/events-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventsService } from './events/shared/events.service';

@NgModule({
    imports:  [BrowserModule],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavbarComponent    
    ],
    providers: [EventsService],
    bootstrap: [EventsAppComponent]
})

export class AppModule {}