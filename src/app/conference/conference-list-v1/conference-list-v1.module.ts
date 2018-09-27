import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConferenceListV1Component } from './conference-list-v1.component';

@NgModule({
    declarations: [
        ConferenceListV1Component
    ],
    entryComponents: [
        ConferenceListV1Component
    ],
    exports: [
        ConferenceListV1Component
    ],
    imports: [
        CommonModule
    ]
})
export class ConferenceListV1Module {
}
