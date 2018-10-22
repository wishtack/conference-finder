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
import { ConditionDomain } from './condition-domain-form/condition-domain';
import { ConditionDomainFormComponent } from './condition-domain-form/condition-domain-form.component';
import { ConditionDomainVerifier } from './condition-domain-form/condition-domain-verifier';
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
        },
        {
            conditionClass: ConditionDomain,
            conditionFormComponentClass: ConditionDomainFormComponent,
            conditionVerifier: this._conditionDomainVerifier,
            label: 'Domain',
            type: ConditionDomain.type
        }
    ];

    constructor(
        private _conditionAudiencePercentageVerifier: ConditionAudiencePercentageVerifier,
        private _conditionDeviceVerifier: ConditionDeviceVerifier,
        private _conditionDomainVerifier: ConditionDomainVerifier
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
