import { Component, Input, OnInit } from '@angular/core';
import { Conference } from '../conference';
import { ConferenceListComponent } from '../conference-list-component';

@Component({
    selector: 'wt-conference-list-table',
    templateUrl: './conference-list-table.component.html',
    styleUrls: ['./conference-list-table.component.scss']
})
export class ConferenceListTableComponent implements ConferenceListComponent, OnInit {

    @Input() conferenceList: Conference[];

    displayedColumns = [
        'name',
        'city',
        'country'
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
