/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { ConditionVerifier } from '../condition-type-info';
import { ConditionDomain } from './condition-domain';

@Injectable({
    providedIn: 'root'
})
export class ConditionDomainVerifier implements ConditionVerifier {

    verify(condition: ConditionDomain) {

        return location.hostname === condition.domain;

    }

}
