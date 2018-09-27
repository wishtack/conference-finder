/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicComponentLoaderModule } from '../../lib/dynamic-component-loader';
import { ConferenceListContainerComponent } from './conference-list-container/conference-list-container.component';

@NgModule({
    declarations: [
        ConferenceListContainerComponent
    ],
    exports: [
        ConferenceListContainerComponent
    ],
    imports: [
        CommonModule,
        DynamicComponentLoaderModule.declareModule({
            moduleId: 'conference-list-grid',
            modulePath: './conference-list-grid/conference-list-grid.module#ConferenceListGridModule'
        }),
        DynamicComponentLoaderModule.declareModule({
            moduleId: 'conference-list-v1',
            modulePath: './conference-list-v1/conference-list-v1.module#ConferenceListV1Module'
        })
    ]
})
export class ConferenceModule {
}
