import { NgModule } from '@angular/core';
import { CirclePictureModule } from '../../lib/circle-picture/circle-picture.module';
import { SharedModule } from '../shared/shared.module';
import { LinksComponent } from './links/links.component';

@NgModule({
    declarations: [
        LinksComponent
    ],
    exports: [
        LinksComponent
    ],
    imports: [
        CirclePictureModule,
        SharedModule
    ]
})
export class LinksModule {
}
