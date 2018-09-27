import { Component, OnDestroy, OnInit } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { ComponentRecipe, DynamicComponentLoader } from '../../../lib/dynamic-component-loader';
import { CurrentConfigurationService } from '../../configuration/current-configuration.service';
import { Conference } from '../conference';
import { ConferenceRepository } from '../conference-repository';

@Component({
    selector: 'wt-conference-list-container',
    templateUrl: './conference-list-container.component.html',
    styleUrls: ['./conference-list-container.component.scss']
})
export class ConferenceListContainerComponent implements OnDestroy, OnInit {

    componentRecipe$: Observable<ComponentRecipe<any>>;
    conferenceList: Conference[];

    private _scavenger = new Scavenger(this);

    constructor(
        private _conferenceRepository: ConferenceRepository,
        private _currentConfigurationService: CurrentConfigurationService,
        private _dynamicComponentLoader: DynamicComponentLoader
    ) {
    }

    ngOnInit() {

        this._conferenceRepository.getConferenceList()
            .pipe(this._scavenger.collectByKey('conference-list'))
            .subscribe(conferenceList => this.conferenceList = conferenceList);

        this.componentRecipe$ = this._currentConfigurationService.watchCurrentConfiguration()
            .pipe(
                map(configuration => configuration.conferenceListDisplayMode),
                /* Avoids useless calls to `getComponentRecipe`. */
                distinctUntilChanged(),
                switchMap(conferenceListDisplayMode => {

                    const defaultComponentLocation = {
                        moduleId: 'conference-list-table',
                        selector: 'wt-conference-list-table'
                    };

                    const componentLocation = {
                        'grid': {
                            moduleId: 'conference-list-grid',
                            selector: 'wt-conference-list-grid'
                        }
                    }[conferenceListDisplayMode] || defaultComponentLocation;

                    return this._dynamicComponentLoader.getComponentRecipe(componentLocation);

                })
            );

    }

    /**
     * Empty ngOnDestroy is required by Scavenger.
     */
    ngOnDestroy() {
    }

}
