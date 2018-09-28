/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Observable } from 'rxjs';

import { ConferenceFilter } from './conference-filter';

export interface ConferenceSearchComponent {
    conferenceFilter: ConferenceFilter;
    conferenceFilterChange: Observable<ConferenceFilter>;
}
