import { NgModule } from '@angular/core';
import { MatButtonModule, MatTableModule } from '@angular/material';
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
        MatTableModule,
        SharedModule
    ]
})
export class ConferenceListTableModule {
}
