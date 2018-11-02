/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { ReactiveComponentLoaderModule } from '@wishtack/reactive-component-loader';
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
        LogoModule,
        ReactiveComponentLoaderModule.withModule({
            moduleId: 'conference-list-table',
            loadChildren: './+conference-list-table/conference-list-table.module#ConferenceListTableModule'
        }),
        ReactiveComponentLoaderModule.withModule({
            moduleId: 'conference-list-v1',
            loadChildren: './+conference-list-v1/conference-list-v1.module#ConferenceListV1Module'
        }),
        ReactiveComponentLoaderModule.withModule({
            moduleId: 'conference-list-v2',
            loadChildren: './+conference-list-v2/conference-list-v2.module#ConferenceListV2Module'
        }),
        ReactiveComponentLoaderModule.withModule({
            moduleId: 'conference-search-chips',
            loadChildren: './+conference-search-chips/conference-search-chips.module#ConferenceSearchChipsModule'
        }),
        ReactiveComponentLoaderModule.withModule({
            moduleId: 'conference-search-form',
            loadChildren: './+conference-search-form/conference-search-form.module#ConferenceSearchFormModule'
        }),
        ReactiveComponentLoaderModule.withModule({
            moduleId: 'conference-search-links',
            loadChildren: './+conference-search-links/conference-search-links.module#ConferenceSearchLinksModule'
        }),
        SharedModule
    ]
})
export class ConferenceModule {
}
