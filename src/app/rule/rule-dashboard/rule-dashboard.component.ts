import { Component, OnDestroy, OnInit } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Rule } from '../rule';
import { RuleRepository } from '../rule-repository';

@Component({
    selector: 'wt-rule-dashboard',
    templateUrl: './rule-dashboard.component.html',
    styleUrls: ['./rule-dashboard.component.css']
})
export class RuleDashboardComponent implements OnDestroy, OnInit {

    ruleList = null;

    private _scavenger = new Scavenger(this);

    constructor(private _ruleRepository: RuleRepository) {
    }

    ngOnInit() {
        this._ruleRepository.watchConfigurationList()
            .pipe(this._scavenger.collect())
            .subscribe(ruleList => this.ruleList = ruleList);
    }

    onRuleChange(ruleId: string, rule: Rule) {
        this._ruleRepository.updateRule(ruleId, rule);
    }

    ngOnDestroy() {
    }

}
