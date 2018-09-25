import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConferenceListTableComponent } from './conference-list-table/conference-list-table.component';

@NgModule({
    declarations: [
        ConferenceListTableComponent
    ],
    exports: [
        ConferenceListTableComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ConferenceListTableModule {
}
