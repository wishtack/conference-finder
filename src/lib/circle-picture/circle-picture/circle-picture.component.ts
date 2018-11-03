import { Component, Input } from '@angular/core';

@Component({
    selector: 'wt-circle-picture',
    templateUrl: './circle-picture.component.html',
    styleUrls: ['./circle-picture.component.scss']
})
export class CirclePictureComponent {

    @Input() diameter = 150;
    @Input() pictureUri: string;

}
