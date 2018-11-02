import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveComponentLoaderModule } from '@wishtack/reactive-component-loader';
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
        FlexLayoutModule,
        ReactiveComponentLoaderModule
    ]
})
export class ConferenceSearchLinksModule {
}
