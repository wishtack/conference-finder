/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { Configuration } from '../configuration/configuration';
import { Condition } from '../rule-condition/condition';

export class Rule {

    id: string;
    condition: Condition;
    configuration: Configuration;
    position: number;

    constructor(args: Partial<Rule> = {}) {
        this.id = args.id;
        this.condition = args.condition;
        this.configuration = args.configuration != null ? new Configuration(args.configuration) : null;
        this.position = args.position;
    }

}
