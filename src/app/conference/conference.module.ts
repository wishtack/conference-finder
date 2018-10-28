/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { ReactiveComponentLoaderModule } from '../../lib/reactive-component-loader';
import { LogoModule } from '../logo/logo.module';
import { SharedModule } from '../shared/shared.module';
import { ConferenceListContainerComponent } from './conference-list-container/conference-list-container.component';

@NgModule({
    declarations: [
        ConferenceListContainerComponent
    ],
    exports: [
        ConferenceListContainerComponent
    ],
    imports: [
        ReactiveComponentLoaderModule.declareModule({
            moduleId: 'conference-list-table',
            modulePath: './+conference-list-table/conference-list-table.module#ConferenceListTableModule'
        }),
        ReactiveComponentLoaderModule.declareModule({
            moduleId: 'conference-list-v1',
            modulePath: './+conference-list-v1/conference-list-v1.module#ConferenceListV1Module'
        }),
        ReactiveComponentLoaderModule.declareModule({
            moduleId: 'conference-list-v2',
            modulePath: './+conference-list-v2/conference-list-v2.module#ConferenceListV2Module'
        }),
        ReactiveComponentLoaderModule.declareModule({
            moduleId: 'conference-search-chips',
            modulePath: './+conference-search-chips/conference-search-chips.module#ConferenceSearchChipsModule'
        }),
        ReactiveComponentLoaderModule.declareModule({
            moduleId: 'conference-search-form',
            modulePath: './+conference-search-form/conference-search-form.module#ConferenceSearchFormModule'
        }),
        ReactiveComponentLoaderModule.declareModule({
            moduleId: 'conference-search-links',
            modulePath: './+conference-search-links/conference-search-links.module#ConferenceSearchLinksModule'
        }),
        LogoModule,
        SharedModule
    ]
})
export class ConferenceModule {
}
