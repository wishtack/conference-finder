import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { ConferenceListTableComponent } from './conference-list-table.component';

@NgModule({
    declarations: [
        ConferenceListTableComponent
    ],
    entryComponents: [
        ConferenceListTableComponent
    ],
    exports: [
        ConferenceListTableComponent
    ],
    imports: [
        CommonModule,
        MatTableModule
    ]
})
export class ConferenceListTableModule {
}
