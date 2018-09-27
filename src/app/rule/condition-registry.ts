/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { ConditionAudiencePercentage } from './condition-audience-percentage-form/condition-audience-percentage';
import { ConditionAudiencePercentageFormComponent } from './condition-audience-percentage-form/condition-audience-percentage-form.component';
import { ConditionAudiencePercentageVerifier } from './condition-audience-percentage-form/condition-audience-percentage-verifier';
import { ConditionTypeInfo } from './condition-type-info';

export function unknownConditionType(conditionType: string) {
    return new Error(`Unknown condition type '${conditionType}'.`);
}

@Injectable({
    providedIn: 'root'
})
export class ConditionRegistry {

    private _conditionTypeInfoList: ConditionTypeInfo[] = [
        {
            conditionClass: ConditionAudiencePercentage,
            conditionFormComponentClass: ConditionAudiencePercentageFormComponent,
            conditionVerifier: this._conditionAudiencePercentageVerifier,
            label: 'Audience Percentage',
            type: ConditionAudiencePercentage.type
        }
    ];

    constructor(
        private _conditionAudiencePercentageVerifier: ConditionAudiencePercentageVerifier
    ) {
    }

    getConditionClass(conditionType: string) {
        return this._getConditionTypeInfo(conditionType).conditionClass;
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

    getConditionVerifier(conditionType: string) {
        return this._getConditionTypeInfo(conditionType).conditionVerifier;
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
