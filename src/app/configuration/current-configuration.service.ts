/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RuleRepository } from '../rule/rule-repository';
import { Configuration } from './configuration';

@Injectable({
    providedIn: 'root'
})
export class CurrentConfigurationService {

    constructor(private _ruleRepository: RuleRepository) {
    }

    watchCurrentConfiguration(): Observable<Configuration> {

        return this._ruleRepository.watchRuleList()
            .pipe(
                map(ruleList => {

                    return null;

                })
            );

    }

}
