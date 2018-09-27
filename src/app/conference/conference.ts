/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import * as moment from 'moment';
import { Moment } from 'moment';

export class Conference {

    city: string;
    country: string;
    name: string;
    twitter: string;
    url: string;

    startDate: Moment;
    endDate: Moment;

    cfpUrl: string;
    cfpEndDate: Moment;

    constructor(args: Partial<Conference> = {}) {

        this.city = args.city;
        this.country = args.country;
        this.name = args.name;
        this.twitter = args.twitter;
        this.url = args.url;

        this.startDate = args.startDate != null ? moment(args.startDate) : null;
        this.endDate = args.endDate != null ? moment(args.endDate) : null;

        this.cfpUrl = args.cfpUrl;
        this.cfpEndDate = args.cfpEndDate != null ? moment(args.cfpEndDate) : null;

    }

}
