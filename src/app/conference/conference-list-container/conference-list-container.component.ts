import { Component, OnDestroy, OnInit } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ComponentLocation } from '../../../lib/dynamic-component-loader/dynamic-component-loader';
import { ConfigurationResolver } from '../../configuration/configuration-resolver.service';
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

    notFoundPictureUri = require('./not-found.jpg');

    private _scavenger = new Scavenger(this);

    onConferenceFilterChange = (conferenceFilter: ConferenceFilter) => this._retrieveConferenceList(conferenceFilter);

    constructor(
        private _conferenceRepository: ConferenceRepository,
        private _configurationResolver: ConfigurationResolver
    ) {

        this.conferenceListComponentLocation$ = this._configurationResolver
            .watchConfigurationProperty('conferenceListDisplayMode')
            .pipe(
                map((conferenceListDisplayMode) => ({
                    moduleId: `conference-list-${conferenceListDisplayMode}`,
                    selector: `wt-conference-list-${conferenceListDisplayMode}`
                }))
            );

        this.conferenceSearchComponentLocation$ = this._configurationResolver
            .watchConfigurationProperty('conferenceSearchDisplayMode')
            .pipe(
                map((conferenceSearchDisplayMode) => ({
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

    private _retrieveConferenceList(conferenceFilter: ConferenceFilter) {

        this.conferenceFilter = conferenceFilter;
        this._conferenceRepository.getConferenceList(conferenceFilter)
            .pipe(this._scavenger.collectByKey('conference-list'))
            .subscribe(conferenceList => this.conferenceList = conferenceList);

    }

}
