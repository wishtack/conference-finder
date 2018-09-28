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

    private _scavenger = new Scavenger(this);

    private _conferenceListComponentLocationDict = {
        table: {
            moduleId: 'conference-list-table',
            selector: 'wt-conference-list-table'
        },
        v1: {
            moduleId: 'conference-list-v1',
            selector: 'wt-conference-list-v1'
        },
        v2: {
            moduleId: 'conference-list-v2',
            selector: 'wt-conference-list-v2'
        }
    };
    private _conferenceSearchComponentLocationDict = {
        form: {
            moduleId: 'conference-search-form',
            selector: 'wt-conference-search-form'
        },
        links: {
            moduleId: 'conference-search-links',
            selector: 'wt-conference-search-links'
        }
    };

    constructor(
        private _conferenceRepository: ConferenceRepository,
        private _currentConfigurationService: CurrentConfigurationService
    ) {

        const configuration$ = this._currentConfigurationService.watchCurrentConfiguration()
            .pipe(shareReplay(1));

        this.conferenceListComponentLocation$ = configuration$.pipe(
            map(configuration => {
                return this._conferenceListComponentLocationDict[configuration.conferenceListDisplayMode]
                    || this._conferenceListComponentLocationDict.v1;
            })
        );

        this.conferenceSearchComponentLocation$ = configuration$.pipe(
            map(configuration => {
                return this._conferenceSearchComponentLocationDict[configuration.conferenceSearchDisplayMode]
                    || this._conferenceSearchComponentLocationDict.form;
            })
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
