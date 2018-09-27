/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Condition } from '../rule/condition';
import { ConditionRegistry } from '../rule/condition-registry';
import { RuleRepository } from '../rule/rule-repository';
import { Configuration } from './configuration';

@Injectable({
    providedIn: 'root'
})
export class CurrentConfigurationService {

    constructor(
        private _conditionRegistry: ConditionRegistry,
        private _ruleRepository: RuleRepository
    ) {
    }

    watchCurrentConfiguration(): Observable<Configuration> {

        return this._ruleRepository.watchRuleList()
            .pipe(
                map(ruleList => {

                    return ruleList
                    /* Only keep matching rules. */
                        .filter(rule => this._verifyCondition(rule.condition))
                        /* Grab each rule's configuration. */
                        .map(rule => rule.configuration)
                        /* Merge all configurations. */
                        .reduce((mergedConfiguration, configuration) => {

                            /* Remove undefined values.
                             * e.g.: {a: 1, b: undefined, c: null} => {a: 1, c: null}. */
                            const configurationData = Object.assign({}, ...Object.entries(configuration)
                                .filter(([key, value]) => value !== undefined)
                                .map(([key, value]) => ({[key]: value})));

                            return new Configuration({
                                ...mergedConfiguration,
                                ...configurationData
                            });

                        }, new Configuration());

                })
            );

    }

    private _verifyCondition(condition: Condition) {

        /* If there's no condition then the condition is applied. */
        if (condition == null) {
            return true;
        }

        return this._conditionRegistry.getConditionVerifier(condition.type).verify(condition);

    }

}
