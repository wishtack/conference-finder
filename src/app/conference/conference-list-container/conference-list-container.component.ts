import { Component, OnDestroy, OnInit } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ComponentLocation } from '../../../lib/dynamic-component-loader/dynamic-component-loader';
import { CurrentConfigurationService } from '../../configuration/current-configuration.service';
import { Conference } from '../conference';
import { ConferenceRepository } from '../conference-repository';

@Component({
    selector: 'wt-conference-list-container',
    templateUrl: './conference-list-container.component.html',
    styleUrls: ['./conference-list-container.component.scss']
})
export class ConferenceListContainerComponent implements OnDestroy, OnInit {

    componentLocation$: Observable<ComponentLocation>;
    inputs: {
        conferenceList?: Conference[]
    } = {};

    private _scavenger = new Scavenger(this);

    private _conferenceListComponentLocationDict = {
        grid: {
            moduleId: 'conference-list-grid',
            selector: 'wt-conference-list-grid'
        },
        table: {
            moduleId: 'conference-list-v1',
            selector: 'wt-conference-list-v1'
        }
    };

    constructor(
        private _conferenceRepository: ConferenceRepository,
        private _currentConfigurationService: CurrentConfigurationService
    ) {

        this.componentLocation$ = this._currentConfigurationService.watchCurrentConfiguration()
            .pipe(
                map(configuration => configuration.conferenceListDisplayMode),
                /* Avoids useless calls to `getComponentRecipe`. */
                distinctUntilChanged(),
                map(conferenceListDisplayMode => {

                    return this._conferenceListComponentLocationDict[conferenceListDisplayMode]
                        || this._conferenceListComponentLocationDict.table;

                })
            );

    }

    ngOnInit() {

        this._conferenceRepository.getConferenceList()
            .pipe(this._scavenger.collectByKey('conference-list'))
            .subscribe(conferenceList => this.inputs = {
                ...this.inputs,
                conferenceList
            });

    }

    /**
     * Empty ngOnDestroy is required by Scavenger.
     */
    ngOnDestroy() {
    }

}
