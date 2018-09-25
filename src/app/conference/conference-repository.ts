/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Conference } from './conference';

@Injectable({
    providedIn: 'root'
})
export class ConferenceRepository {

    constructor(private _httpClient: HttpClient) {
    }

    getConferenceList() {
        return this._httpClient.get<Partial<Conference>[]>('https://raw.githubusercontent.com/tech-conferences/conference-data/master/conferences/2019/javascript.json')
            .pipe(map(conferenceDataList => conferenceDataList.map(data => new Conference(data))));
    }

}
