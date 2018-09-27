import { Component, Input } from '@angular/core';
import { Conference } from '../conference';
import { ConferenceListComponent } from '../conference-list-component';

@Component({
    selector: 'wt-conference-list-v2',
    templateUrl: './conference-list-v2.component.html',
    styleUrls: ['./conference-list-v2.component.scss']
})
export class ConferenceListV2Component implements ConferenceListComponent {

    @Input() conferenceList: Conference[];

}
