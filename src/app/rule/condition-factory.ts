/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { Condition } from './condition';
import { conditionAudiencePercentageTypeInfo } from './condition-audience-percentage-form/condition-audience-percentage';
import { ConditionTypeInfo } from './condition-type-info';

export function unknownConditionType(conditionType: string) {
    return new Error(`Unknown condition type '${conditionType}'.`);
}

@Injectable({
    providedIn: 'root'
})
export class ConditionFactory {

    private _conditionTypeInfoList = [
        conditionAudiencePercentageTypeInfo
    ];

    createCondition(conditionData: Partial<Condition>): Condition {

        if (conditionData == null || conditionData.type == null) {
            return null;
        }

        const {conditionClass} = this._conditionTypeInfoList
            .find(conditionTypeInfo => conditionTypeInfo.type === conditionData.type);

        if (conditionClass == null) {
            throw unknownConditionType(conditionData.type);
        }

        return new conditionClass(conditionData);

    }

    getConditionTypeInfoList(): ConditionTypeInfo[] {
        return this._conditionTypeInfoList;
    }

}
