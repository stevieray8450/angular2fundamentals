import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from './shared/event.model'

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <div><h2>{{event?.name | uppercase}}</h2></div>
        <div>Date: {{event?.date | date:'shortDate'}}</div>
        <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">Early Start</span>
            <span *ngSwitchCase="'10:00 am'">Late Start</span>
            <span *ngSwitchDefault>Normal Start</span>
        </div>
        <div>Price: {{event?.price | currency:'USD':true}}</div>
        <div [hidden]="!event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}} , {{event?.location?.state}} 
            {{event?.location?.country}}</span>
        </div>
        <div [hidden]="!event?.onlineUrl">
            Online URL: {{event?.onlineUrl}}
        </div>
    </div>
    `,
    styles: [`
    .pad-left {margin-left: 10px;} 
    .thumbnail {min-height: 210px;}
    .green {color: #003300 !important;} 
    .bold {font-weight: bold;}
        `] 
})

export class EventThumbnailComponent {
    @Input() event: IEvent

    getStartTimeStyle() : any {
        if (this.event && this.event.time === '8:00 am') {
            return {color: '#003300', 'font-weight': 'bold'}
        }
        return {} // will return empty object if the start time is NOT 8:00am
    }
}

