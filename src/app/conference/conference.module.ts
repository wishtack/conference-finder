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
            moduleId: 'conference-list-table',
            modulePath: './+conference-list-table/conference-list-table.module#ConferenceListTableModule'
        }),
        DynamicComponentLoaderModule.declareModule({
            moduleId: 'conference-list-v1',
            modulePath: './+conference-list-v1/conference-list-v1.module#ConferenceListV1Module'
        }),
        DynamicComponentLoaderModule.declareModule({
            moduleId: 'conference-list-v2',
            modulePath: './+conference-list-v2/conference-list-v2.module#ConferenceListV2Module'
        }),
        DynamicComponentLoaderModule.declareModule({
            moduleId: 'conference-search-chips',
            modulePath: './+conference-search-chips/conference-search-chips.module#ConferenceSearchChipsModule'
        }),
        DynamicComponentLoaderModule.declareModule({
            moduleId: 'conference-search-form',
            modulePath: './+conference-search-form/conference-search-form.module#ConferenceSearchFormModule'
        }),
        DynamicComponentLoaderModule.declareModule({
            moduleId: 'conference-search-links',
            modulePath: './+conference-search-links/conference-search-links.module#ConferenceSearchLinksModule'
        })
    ]
})
export class ConferenceModule {
}
