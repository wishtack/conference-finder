/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { Condition } from './condition';
import { conditionAudiencePercentageTypeInfo } from './condition-audience-percentage-form/condition-audience-percentage-type-info';
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

        const conditionClass = this._getConditionTypeInfo(conditionData.type).conditionClass;

        return new conditionClass(conditionData);

    }

    getConditionTypeInfoList(): ConditionTypeInfo[] {
        return this._conditionTypeInfoList;
    }

    getConditionFormComponentClass(conditionType: string) {

        if (conditionType == null) {
            return null;
        }

        return this._getConditionTypeInfo(conditionType).conditionFormComponentClass;

    }

    private _getConditionTypeInfo(conditionType: string) {

        const conditionTypeInfo = this._conditionTypeInfoList
            .find(_conditionTypeInfo => _conditionTypeInfo.type === conditionType);

        if (conditionTypeInfo == null) {
            throw unknownConditionType(conditionType);
        }

        return conditionTypeInfo;

    }

}
