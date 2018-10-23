import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { map } from 'rxjs/operators';
import { Conference } from '../conference';
import { ConferenceListComponent } from '../conference-list-component';

@Component({
    selector: 'wt-conference-list-table',
    templateUrl: './conference-list-table.component.html',
    styleUrls: ['./conference-list-table.component.scss']
})
export class ConferenceListTableComponent implements ConferenceListComponent, OnChanges, OnInit {

    @Input() conferenceList: Conference[];

    conferenceListDataSource = new MatTableDataSource();

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

    private _defaultDisplayedColumns = [
        'conference',
        'location',
        'date',
        'cfp'
    ];
    @ViewChild(MatSort) private _sort: MatSort;

    constructor(private _breakpointObserver: BreakpointObserver) {
    }

    ngOnInit() {

        this.conferenceListDataSource.sort = this._sort;

        this.conferenceListDataSource.sortingDataAccessor = (conference: Conference, column) => {

            if (column === 'cfp' && conference.cfpEndDate != null) {
                return conference.cfpEndDate.toDate().getTime();
            }

            return null;

        };
    }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.conferenceList != null) {
            this.conferenceListDataSource.data = this.conferenceList;
        }

    }

}
