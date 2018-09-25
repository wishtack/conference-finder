import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConferenceListGridComponent } from './conference-list-grid/conference-list-grid.component';

@NgModule({
    declarations: [
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
