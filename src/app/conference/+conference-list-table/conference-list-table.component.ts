import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Conference } from '../conference';
import { ConferenceListComponent } from '../conference-list-component';

@Component({
    selector: 'wt-conference-list-table',
    templateUrl: './conference-list-table.component.html',
    styleUrls: ['./conference-list-table.component.scss']
})
export class ConferenceListTableComponent implements ConferenceListComponent {

    @Input() conferenceList: Conference[];

    private _defaultDisplayedColumns = [
        'conference',
        'location',
        'date',
        'cfp'
    ];
    displayedColumns$ = this._breakpointObserver.observe([
        Breakpoints.XSmall,
        Breakpoints.Small
    ])
        .pipe(map(({matches}) => {

            /* Nothing to do. */
            if (!matches) {
                return this._defaultDisplayedColumns;
            }

            const desktopOnlyColumns = [
                'date',
                'location'
            ];

            /* Otherwise, hide location column. */
            return this._defaultDisplayedColumns
                .filter(columnName => !desktopOnlyColumns.includes(columnName));

        }));

    constructor(private _breakpointObserver: BreakpointObserver) {
    }


}
