import { Component, OnDestroy, OnInit } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

    componentLocation$: Observable<ComponentLocation>;
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

    constructor(
        private _conferenceRepository: ConferenceRepository,
        private _currentConfigurationService: CurrentConfigurationService
    ) {

        this.componentLocation$ = this._currentConfigurationService.watchCurrentConfiguration()
            .pipe(
                map(configuration => {

                    return this._conferenceListComponentLocationDict[configuration.conferenceListDisplayMode]
                        || this._conferenceListComponentLocationDict.v1;

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
