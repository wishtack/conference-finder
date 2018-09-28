/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

export class Configuration {

    conferenceListDisplayMode: string;
    conferenceSearchDisplayMode: string;

    constructor(args: Partial<Configuration> = {}) {
        this.conferenceSearchDisplayMode = args.conferenceSearchDisplayMode;
        this.conferenceListDisplayMode = args.conferenceListDisplayMode;
    }

}
