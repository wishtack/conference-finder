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
    conferenceList: Conference[];

    private _scavenger = new Scavenger(this);

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

                    return componentLocation;

                })
            );

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
