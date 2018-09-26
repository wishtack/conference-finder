/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

export class Configuration {

    conferenceListDisplayMode: string;

    constructor(args: Partial<Configuration> = {}) {
        this.conferenceListDisplayMode = args.conferenceListDisplayMode;
    }

}
