/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicComponentLoaderModule } from '../../lib/dynamic-component-loader.module';
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
        DynamicComponentLoaderModule.declareModule('../conference-list-grid/conference-list-grid.module#ConferenceListGridModule'),
        DynamicComponentLoaderModule.declareModule('../conference-list-table/conference-list-table.module#ConferenceListTableModule')
    ]
})
export class ConferenceModule {
}
