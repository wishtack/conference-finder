/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

export class Conference {

    name: string;

    constructor(args: Partial<Conference> = {}) {
        this.name = args.name;
    }

}
