import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CirclePictureComponent } from './circle-picture/circle-picture.component';

@NgModule({
    declarations: [
        CirclePictureComponent
    ],
    exports: [
        CirclePictureComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule
    ]
})
export class CirclePictureModule {
}
