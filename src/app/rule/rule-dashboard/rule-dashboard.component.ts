import { Component, OnDestroy, OnInit } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Configuration } from '../../configuration/configuration';
import { Rule } from '../rule';
import { RuleRepository } from '../rule-repository';

@Component({
    selector: 'wt-rule-dashboard',
    templateUrl: './rule-dashboard.component.html',
    styleUrls: ['./rule-dashboard.component.scss']
})
export class RuleDashboardComponent implements OnDestroy, OnInit {

    ruleList = null;

    private _scavenger = new Scavenger(this);

    constructor(private _ruleRepository: RuleRepository) {
    }

    ngOnInit() {
        this._ruleRepository.watchRuleList()
            .pipe(this._scavenger.collect())
            .subscribe(ruleList => this.ruleList = ruleList);
    }

    ngOnDestroy() {
    }

    onRuleChange(ruleId: string, rule: Rule) {
        this._ruleRepository.updateRule(ruleId, rule);
    }

    createRule() {
        this._ruleRepository.createRule(new Rule({
            configuration: new Configuration()
        }));
    }

    removeRule(ruleId: any) {
        this._ruleRepository.removeRule(ruleId);
    }

    ruleIdTracker(index: number, rule: Rule) {
        return rule.id;
    }

}
