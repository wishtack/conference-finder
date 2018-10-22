import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { distinctUntilChanged, map } from 'rxjs/operators';
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

        this._currentConfigurationService.watchCurrentConfiguration()
            .pipe(
                map(configuration => configuration.theme),
                /* Ignore if value doesn't change. */
                distinctUntilChanged(),
                this._scavenger.collect()
            )
            .subscribe(theme => {

                /* Using `setAttribute` instead of `addClass` because we want to reset the current theme. */
                this._renderer.setAttribute(this._document.body, 'class', `wt-${theme}-theme`);

            });

    }

    ngOnDestroy() {
    }

}
