/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { Condition } from './condition';
import { ConditionRegistry } from './condition-registry';

@Injectable({
    providedIn: 'root'
})
export class ConditionFactory {

    constructor(private _conditionRegistry: ConditionRegistry) {
    }

    createCondition(conditionData: Partial<Condition>): Condition {

        if (conditionData == null || conditionData.type == null) {
            return null;
        }

        const conditionClass = this._conditionRegistry.getConditionClass(conditionData.type);

        return new conditionClass(conditionData);

    }

}
