import { Component, OnDestroy, OnInit } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ComponentLocation } from '../../../lib/dynamic-component-loader/dynamic-component-loader';
import { CurrentConfigurationService } from '../../configuration/current-configuration.service';
import { Conference } from '../conference';
import { ConferenceFilter } from '../conference-filter';
import { ConferenceRepository } from '../conference-repository';

@Component({
    selector: 'wt-conference-list-container',
    templateUrl: './conference-list-container.component.html',
    styleUrls: ['./conference-list-container.component.scss']
})
export class ConferenceListContainerComponent implements OnDestroy, OnInit {

    conferenceListComponentLocation$: Observable<ComponentLocation>;
    conferenceSearchComponentLocation$: Observable<ComponentLocation>;

    conferenceFilter: ConferenceFilter;
    conferenceList: Conference[];
    searchOutputs = {
        conferenceFilterChange: (conferenceFilter: ConferenceFilter) => this.onConferenceFilterChange(conferenceFilter)
    };

    notFoundPictureUri = require('./not-found.jpg');

    private _scavenger = new Scavenger(this);

    constructor(
        private _conferenceRepository: ConferenceRepository,
        private _currentConfigurationService: CurrentConfigurationService
    ) {

        const configuration$ = this._currentConfigurationService.watchCurrentConfiguration()
            .pipe(shareReplay(1));

        this.conferenceListComponentLocation$ = configuration$.pipe(
            map(({conferenceListDisplayMode}) => ({
                moduleId: `conference-list-${conferenceListDisplayMode}`,
                selector: `wt-conference-list-${conferenceListDisplayMode}`
            }))
        );

        this.conferenceSearchComponentLocation$ = configuration$.pipe(
            map(({conferenceSearchDisplayMode}) => ({
                moduleId: `conference-search-${conferenceSearchDisplayMode}`,
                selector: `wt-conference-search-${conferenceSearchDisplayMode}`
            }))
        );

    }

    ngOnInit() {
        this._retrieveConferenceList(new ConferenceFilter({
            topicId: 'javascript'
        }));
    }

    /**
     * Empty ngOnDestroy is required by Scavenger.
     */
    ngOnDestroy() {
    }

    onConferenceFilterChange(conferenceFilter: ConferenceFilter) {
        this._retrieveConferenceList(conferenceFilter);
    }

    private _retrieveConferenceList(conferenceFilter: ConferenceFilter) {

        this.conferenceFilter = conferenceFilter;
        this._conferenceRepository.getConferenceList(conferenceFilter)
            .pipe(this._scavenger.collectByKey('conference-list'))
            .subscribe(conferenceList => this.conferenceList = conferenceList);

    }

}
