import { NgModule } from '@angular/core';
import { ReactiveComponentLoaderModule } from '@wishtack/reactive-component-loader';
import { CirclePictureModule } from '../../lib/circle-picture/circle-picture.module';
import { SharedModule } from '../shared/shared.module';
import { LinksComponent } from './links/links.component';

@NgModule({
    declarations: [
        LinksComponent
    ],
    entryComponents: [
        LinksComponent
    ],
    exports: [
        LinksComponent
    ],
    imports: [
        CirclePictureModule,
        ReactiveComponentLoaderModule,
        SharedModule
    ]
})
export class LinksModule {
}
