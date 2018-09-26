/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { Condition } from './condition';
import { ConditionAudiencePercentage } from './condition-audience-percentage-form/condition-audience-percentage';

export function unknownConditionType(conditionType: string) {
    return new Error(`Unknown condition type '${conditionType}'.`);
}

export interface ConditionTypeInfo {
    label: string;
    type: string;
}

export interface ConditionClass extends ConditionTypeInfo, Function {
    new(...args: any[]): Condition;
}

@Injectable({
    providedIn: 'root'
})
export class ConditionFactory {

    private _conditionTypeMap = new Map<string, ConditionClass>(Object.entries({
        [ConditionAudiencePercentage.type]: ConditionAudiencePercentage
    }));

    createCondition(conditionData: Partial<Condition>): Condition {

        if (conditionData == null || conditionData.type == null) {
            return null;
        }

        const conditionClass = this._conditionTypeMap.get(conditionData.type);

        if (conditionClass == null) {
            throw unknownConditionType(conditionData.type);
        }

        return new conditionClass(conditionData);

    }

    getConditionTypeInfoList(): ConditionTypeInfo[] {
        return Array.from(this._conditionTypeMap.values())
            .map(conditionClass => {
                return {
                    label: conditionClass.label,
                    type: conditionClass.type,
                };
            });
    }

}
