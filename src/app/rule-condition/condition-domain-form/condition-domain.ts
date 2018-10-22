/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Condition } from '../condition';

export class ConditionDomain implements Condition {

    static type = 'domain';

    type = ConditionDomain.type;

    domain: string;

    constructor(args: Partial<ConditionDomain> = {}) {
        this.domain = args.domain;
    }

}
