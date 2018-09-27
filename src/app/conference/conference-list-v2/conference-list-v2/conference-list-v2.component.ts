import { Component, Input } from '@angular/core';
import { Conference } from '../../conference';

@Component({
    selector: 'wt-conference-list-v2',
    templateUrl: './conference-list-v2.component.html',
    styleUrls: ['./conference-list-v2.component.scss']
})
export class ConferenceListV2Component {

    @Input() conferenceList: Conference[];

}
