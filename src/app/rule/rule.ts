/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { Configuration } from '../configuration/configuration';
import { Condition } from './condition';
import { ConditionFactory } from './condition-factory';

export class Rule {

    id: string;
    condition: Condition;
    configuration: Configuration;

    private _conditionFactory = new ConditionFactory();

    constructor(args: Partial<Rule> = {}) {
        this.id = args.id;
        this.condition = args.condition != null ? this._conditionFactory.createCondition(args.condition) : null;
        this.configuration = args.configuration != null ? new Configuration(args.configuration) : null;
    }

}
