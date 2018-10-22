/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { ConditionVerifier } from '../condition-type-info';
import { ConditionAudiencePercentage } from './condition-audience-percentage';

@Injectable({
    providedIn: 'root'
})
export class ConditionAudiencePercentageVerifier implements ConditionVerifier {

    /* Randomly setting user group id as an integer between 0 and 99. */
    private _userGroupId = Math.floor(Math.random() * 100);

    verify(condition: ConditionAudiencePercentage) {

        /* null or undefined values should be considered as 0. */
        const audiencePercentage = condition.audiencePercentage || 0;

        return this._userGroupId < audiencePercentage;

    }

}
