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

    topicList = [
        {id: 'android', label: 'Android'},
        {id: 'css', label: 'CSS'},
        {id: 'data', label: 'Data'},
        {id: 'devops', label: 'DevOps'},
        {id: 'elixir', label: 'Elixir'},
        {id: 'general', label: 'General'},
        {id: 'golang', label: 'Go'},
        {id: 'graphql', label: 'GraphQL'},
        {id: 'ios', label: 'iOS'},
        {id: 'javascript', label: 'JavScript'},
        {id: 'php', label: 'PHP'},
        {id: 'python', label: 'Python'},
        {id: 'ruby', label: 'Ruby'},
        {id: 'rust', label: 'Rust'},
        {id: 'security', label: 'Security'},
        {id: 'tech-comm', label: 'Technical Communication'},
        {id: 'ux', label: 'UX'},
    ];

    constructor(private _httpClient: HttpClient) {
    }

    getConferenceList() {
        return this._httpClient.get<Partial<Conference>[]>('https://raw.githubusercontent.com/tech-conferences/conference-data/master/conferences/2019/javascript.json')
            .pipe(map(conferenceDataList => conferenceDataList.map(data => new Conference(data))));
    }

}
