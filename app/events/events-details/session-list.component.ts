import { Component, Input } from '@angular/core'
import { ISession } from '../shared/event.model'

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/events-details/session-list.component.html'
})

export class SessionListComponent {
    @Input() sessions: ISession[]
}