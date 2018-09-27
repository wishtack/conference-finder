import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Configuration } from '../../configuration/configuration';
import { Rule } from '../rule';
import { RuleRepository } from '../rule-repository';

@Component({
    animations: [
        trigger('dragged', [
            state('true', style({
                filter: 'blur(5px)'
            })),
            transition('false <=> true', animate('300ms ease-in'))
        ]),
        trigger('draggedOver', [
            state('true', style({'padding-top': '200px'})),
            transition('* => *', animate('200ms ease-in'))
        ]),
    ],
    selector: 'wt-rule-dashboard',
    templateUrl: './rule-dashboard.component.html',
    styleUrls: ['./rule-dashboard.component.scss']
})
export class RuleDashboardComponent implements OnDestroy, OnInit {

    draggedRule: Rule;
    draggedOverRule: Rule;
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
            configuration: new Configuration(),
            position: this.ruleList.length
        }));
    }

    removeRule(ruleId: any) {
        this._ruleRepository.removeRule(ruleId);
    }

    ruleIdTracker(index: number, rule: Rule) {
        return rule.id;
    }

    onRuleDragStart(rule: Rule) {
        this.draggedRule = rule;
    }

    onRuleDragEnter(rule: Rule) {
        this.draggedOverRule = rule;
    }

    onRuleDragLeave(rule: Rule) {

        /* Avoid triggering leave events on the dragged element's children.
         * This event is trigger before the change detection applies pointer-events to 'none'. */
        if (rule === this.draggedOverRule) {
            return;
        }

        this.draggedOverRule = null;

    }

    onRuleDrop(rule: Rule) {
        console.log(this.draggedRule);
        console.log(rule);
    }

    onRuleDragEnd() {
        this.draggedRule = null;
        this.draggedOverRule = null;
    }

}
