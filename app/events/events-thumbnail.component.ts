import { Component, Input, Output, EventEmitter } from '@angular/core'


@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <div><h2>{{event?.name}}</h2></div>
        <div>Date: {{event?.date}}</div>
        <div [ngClass]="{green: event?.time === '8:00 am'}" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">Early Start</span>
            <span *ngSwitchCase="'10:00 am'">Late Start</span>
            <span *ngSwitchDefault>Normal Start</span>
        </div>
        <div>Price: \${{event?.price}}</div>
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
    @Input() event: any
}

