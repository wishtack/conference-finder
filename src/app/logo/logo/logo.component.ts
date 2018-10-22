import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'wt-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

    logoPictureUrl: string;

    ngOnInit() {
    }

}
