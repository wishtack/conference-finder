import { Component, OnDestroy, OnInit } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Conference } from '../conference';
import { ConferenceRepository } from '../conference-repository';

@Component({
    selector: 'wt-conference-list-container',
    templateUrl: './conference-list-container.component.html',
    styleUrls: ['./conference-list-container.component.scss']
})
export class ConferenceListContainerComponent implements OnDestroy, OnInit {

    conferenceList: Conference[];

    private _scavenger = new Scavenger(this);

    constructor(private _conferenceRepository: ConferenceRepository) {
    }

    ngOnInit() {
        this._conferenceRepository.getConferenceList()
            .pipe(this._scavenger.collectByKey('conference-list'))
            .subscribe(conferenceList => this.conferenceList = conferenceList);
    }

    /**
     * Empty ngOnDestroy is required by Scavenger.
     */
    ngOnDestroy() {
    }

}
