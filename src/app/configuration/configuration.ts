/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

export class Configuration {

    id: string;
    conferenceListDisplayMode: string;

    constructor(args: Partial<Configuration> = {}) {
        this.id = args.id;
        this.conferenceListDisplayMode = args.conferenceListDisplayMode;
    }

}
