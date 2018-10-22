import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Configuration } from './configuration/configuration';
import { CurrentConfigurationService } from './configuration/current-configuration.service';

@Component({
    selector: 'wt-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {

    private _scavenger = new Scavenger(this);

    constructor(
        @Inject(DOCUMENT) private _document: Document,
        private _renderer: Renderer2,
        private _currentConfigurationService: CurrentConfigurationService
    ) {
    }

    ngOnInit() {

        this._watchConfigurationField('backgroundColor')
            .subscribe(backgroundColor => {
                this._renderer.setStyle(this._document.body, 'backgroundColor', backgroundColor || null);
            });

        this._watchConfigurationField('theme')
            .subscribe(theme => {

                /* Using `setAttribute` instead of `addClass` because we want to reset the current theme. */
                this._renderer.setAttribute(this._document.body, 'class', `wt-${theme}-theme`);

            });

    }

    ngOnDestroy() {
    }

    private _watchConfigurationField(field: keyof Configuration) {

        return this._currentConfigurationService.watchCurrentConfiguration()
            .pipe(
                pluck(field),
                /* Ignore if value doesn't change. */
                distinctUntilChanged(),
                this._scavenger.collect()
            );

    }

}
