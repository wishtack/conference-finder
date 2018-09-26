/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { Configuration } from '../configuration/configuration';

export class Rule {

    id: string;
    configuration: Configuration;

    constructor(args: Partial<Rule> = {}) {
        this.id = args.id;
        this.configuration = args.configuration != null ? new Configuration(args.configuration) : null;
    }

}
