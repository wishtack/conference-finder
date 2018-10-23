import { NgModule } from '@angular/core';
import { MatButtonModule, MatSortModule, MatTableModule } from '@angular/material';
import { DynamicComponentLoaderModule } from '../../../lib/dynamic-component-loader';
import { SharedModule } from '../../shared/shared.module';
import { ConferenceListTableComponent } from './conference-list-table.component';
import { IsFuturePipe } from './is-future.pipe';

@NgModule({
    declarations: [
        ConferenceListTableComponent,
        IsFuturePipe
    ],
    entryComponents: [
        ConferenceListTableComponent
    ],
    exports: [
        ConferenceListTableComponent
    ],
    imports: [
        DynamicComponentLoaderModule,
        MatButtonModule,
        MatSortModule,
        MatTableModule,
        SharedModule
    ]
})
export class ConferenceListTableModule {
}
