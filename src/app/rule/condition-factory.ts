/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Type } from '@angular/core';
import { Condition } from './condition';
import { ConditionAudiencePercentage } from './condition-audience-percentage-form/condition-audience-percentage';

export function unknownConditionType(conditionType: string) {
    return new Error(`Unknown condition type '${conditionType}'.`);
}

export interface ConditionTypeInfo {
    label: string;
    type: string;
}

export class ConditionFactory {

    private _conditionTypeMap = new Map<string, Type<Condition> & ConditionTypeInfo>(Object.entries({
        [ConditionAudiencePercentage.type]: ConditionAudiencePercentage
    }));

    createCondition(conditionData: Partial<Condition>): Condition {

        const conditionType = this._conditionTypeMap[conditionData.type];

        if (conditionType == null) {
            throw unknownConditionType(conditionType);
        }

        return new conditionType(conditionData);

    }

    getConditionTypeInfoList() {
        return Array.from(this._conditionTypeMap.values())
            .map(conditionType => {
                return {
                    label: conditionType.label,
                    type: conditionType.type,
                };
            });
    }

}
