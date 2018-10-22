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
import { ConditionDevice } from './condition-device-form/condition-device';
import { ConditionDeviceFormComponent } from './condition-device-form/condition-device-form.component';
import { ConditionDeviceVerifier } from './condition-device-form/condition-device-verifier';
import { ConditionTypeInfo } from './condition-type-info';

export function unknownConditionType(conditionType: string) {
    return new Error(`Unknown condition type '${conditionType}'.`);
}

@Injectable({
    providedIn: 'root'
})
export class ConditionRegistry {

    private readonly _conditionTypeInfoList: ConditionTypeInfo[] = [
        {
            conditionClass: ConditionAudiencePercentage,
            conditionFormComponentClass: ConditionAudiencePercentageFormComponent,
            conditionVerifier: this._conditionAudiencePercentageVerifier,
            label: 'Audience Percentage',
            type: ConditionAudiencePercentage.type
        },
        {
            conditionClass: ConditionDevice,
            conditionFormComponentClass: ConditionDeviceFormComponent,
            conditionVerifier: this._conditionDeviceVerifier,
            label: 'Device',
            type: ConditionDevice.type
        }
    ];

    constructor(
        private _conditionAudiencePercentageVerifier: ConditionAudiencePercentageVerifier,
        private _conditionDeviceVerifier: ConditionDeviceVerifier
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
