import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConferenceSearchFormComponent } from './conference-search-form.component';

@NgModule({
    declarations: [
        ConferenceSearchFormComponent
    ],
    entryComponents: [
        ConferenceSearchFormComponent
    ],
    exports: [
        ConferenceSearchFormComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ConferenceSearchFormModule {
}
