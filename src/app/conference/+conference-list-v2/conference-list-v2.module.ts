import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule, MatListModule } from '@angular/material';
import { ReactiveComponentLoaderModule } from '@wishtack/reactive-component-loader';
import { ConferenceListV2Component } from './conference-list-v2.component';

@NgModule({
    declarations: [
        ConferenceListV2Component
    ],
    entryComponents: [
        ConferenceListV2Component
    ],
    exports: [
        ConferenceListV2Component
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatListModule,
        ReactiveComponentLoaderModule
    ]
})
export class ConferenceListV2Module {
}
