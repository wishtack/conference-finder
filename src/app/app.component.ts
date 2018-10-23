import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { ConfigurationResolver } from './configuration/configuration-resolver.service';

@Component({
    selector: 'wt-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        @Inject(DOCUMENT) private _document: Document,
        private _renderer: Renderer2,
        private _configurationResolver: ConfigurationResolver
    ) {
    }

    ngOnInit() {

        this._configurationResolver.watchConfigurationProperty('backgroundColor')
            .subscribe(backgroundColor => {
                this._renderer.setStyle(this._document.body, 'backgroundColor', backgroundColor || null);
            });

        this._configurationResolver.watchConfigurationProperty('theme')
            .subscribe(theme => {

                /* Using `setAttribute` instead of `addClass` because we want to reset the current theme. */
                this._renderer.setAttribute(this._document.body, 'class', `wt-${theme}-theme`);

            });

    }

}
