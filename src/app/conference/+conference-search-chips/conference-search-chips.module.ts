import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatChipsModule } from '@angular/material';
import { ConferenceSearchChipsComponent } from './conference-search-chips.component';

@NgModule({
    declarations: [
        ConferenceSearchChipsComponent
    ],
    entryComponents: [
        ConferenceSearchChipsComponent
    ],
    exports: [
        ConferenceSearchChipsComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatChipsModule
    ]
})
export class ConferenceSearchChipsModule {
}