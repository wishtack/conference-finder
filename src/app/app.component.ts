import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'wt-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        @Inject(DOCUMENT) private _document: Document,
        private _renderer: Renderer2
    ) {
    }

    ngOnInit() {
        this._renderer.setAttribute(this._document.body, 'class', '');
        this._renderer.addClass(this._document.body, 'wt-dark-theme');
    }

}
