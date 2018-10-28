import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveComponentLoaderModule } from '../../../lib/reactive-component-loader';
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
        CommonModule,
        ReactiveComponentLoaderModule,
        RouterModule.forChild([])
    ]
})
export class ConferenceListV1Module {
}
