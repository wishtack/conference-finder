import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DynamicComponentLoaderModule } from '../../../lib/dynamic-component-loader';
import { ConferenceSearchLinksComponent } from './conference-search-links.component';

@NgModule({
    declarations: [
        ConferenceSearchLinksComponent
    ],
    entryComponents: [
        ConferenceSearchLinksComponent
    ],
    exports: [
        ConferenceSearchLinksComponent
    ],
    imports: [
        CommonModule,
        DynamicComponentLoaderModule,
        FlexLayoutModule
    ]
})
export class ConferenceSearchLinksModule {
}
