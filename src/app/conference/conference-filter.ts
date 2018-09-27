/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

export class ConferenceFilter {

    topicId: string;

    constructor(args: Partial<ConferenceFilter> = {}) {
        this.topicId = args.topicId;
    }

}
