import { Component, Input } from '@angular/core';
import { Conference } from '../conference';
import { ConferenceListComponent } from '../conference-list-component';

@Component({
    selector: 'wt-conference-list-v1',
    templateUrl: './conference-list-v1.component.html',
    styleUrls: ['./conference-list-v1.component.scss']
})
export class ConferenceListV1Component implements ConferenceListComponent {

    @Input() conferenceList: Conference[];

}
