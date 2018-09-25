import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConferenceListGridComponent } from './conference-list-grid/conference-list-grid.component';

@NgModule({
    declarations: [
        ConferenceListGridComponent
    ],
    entryComponents: [
        ConferenceListGridComponent
    ],
    exports: [
        ConferenceListGridComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ConferenceListGridModule {
}
