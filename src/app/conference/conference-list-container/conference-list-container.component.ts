import { Component, OnDestroy, OnInit } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Observable } from 'rxjs';
import { ComponentRecipe, DynamicComponentLoader } from '../../../lib/dynamic-component-loader';
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
        private _dynamicComponentLoader: DynamicComponentLoader
    ) {
    }

    ngOnInit() {

        this._conferenceRepository.getConferenceList()
            .pipe(this._scavenger.collectByKey('conference-list'))
            .subscribe(conferenceList => this.conferenceList = conferenceList);

        this.componentRecipe$ = this._dynamicComponentLoader.getComponentRecipe({
            moduleId: 'conference-list-grid',
            selector: 'wt-conference-list-grid'
        });

    }

    /**
     * Empty ngOnDestroy is required by Scavenger.
     */
    ngOnDestroy() {
    }

}
