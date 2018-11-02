import { NgModule } from '@angular/core';
import { MatButtonModule, MatSortModule, MatTableModule } from '@angular/material';
import { ReactiveComponentLoaderModule } from '@wishtack/reactive-component-loader';
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
        MatButtonModule,
        MatSortModule,
        MatTableModule,
        ReactiveComponentLoaderModule,
        SharedModule
    ]
})
export class ConferenceListTableModule {
}
