import { Component, Input } from '@angular/core';
import { Conference } from '../../conference';

@Component({
    selector: 'wt-conference-list-v1',
    templateUrl: './conference-list-v1.component.html',
    styleUrls: ['./conference-list-v1.component.scss']
})
export class ConferenceListV1Component {

    @Input() conferenceList: Conference[];

}
