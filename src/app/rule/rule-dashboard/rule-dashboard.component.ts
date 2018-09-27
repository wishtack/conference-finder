import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Configuration } from '../../configuration/configuration';
import { Rule } from '../rule';
import { RuleRepository } from '../rule-repository';

@Component({
    animations: [
        trigger('enterLeave', [
            state('void', style({height: 0, transform: 'scaleY(0)'})),
            transition('void <=> *', animate('400ms ease-in'))
        ]),
        trigger('dragged', [
            state('true', style({filter: 'blur(5px)'})),
            transition('false <=> true', animate('400ms ease-in'))
        ]),
        trigger('draggedOver', [
            state('true', style({marginTop: '200px', transform: 'rotateX(50deg)'})),
            transition('false <=> true', animate('400ms ease-in'))
        ])
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
        this._ruleRepository.removeRule(ruleId, this.ruleList);
    }

    onRuleDragStart(rule: Rule) {
        this.draggedRule = rule;
    }

    onRuleDragEnter(rule: Rule, $event: DragEvent) {
        /* https://github.com/timruffles/mobile-drag-drop/blob/master/README.md#polyfill-requires-dragenter-listener */
        $event.preventDefault();
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

    onRuleDrop(rule: Rule, isFirstRule: boolean) {

        /* Do not replace default rule. */
        if (isFirstRule) {
            return;
        }

        /* Remove dragged rule. */
        const filteredRuleList = this.ruleList.filter(_rule => _rule !== this.draggedRule);

        const targetRuleIndex = filteredRuleList.indexOf(rule);

        if (targetRuleIndex === -1) {
            return;
        }

        /* Insert the dragged rule. */
        const sortedRuleList = [
            ...filteredRuleList.slice(0, targetRuleIndex),
            this.draggedRule,
            ...filteredRuleList.slice(targetRuleIndex)
        ]
        /* Update position. */
            .map((_rule, index) => {
                return new Rule({
                    ..._rule,
                    position: index
                });
            });


        /* @HACK: Remove rule and add the new one in two ticks in order to avoid angular animation issues. */
        this.ruleList = filteredRuleList;
        setTimeout(() => {
            this.ruleList = sortedRuleList;
            this._ruleRepository.updateRulePositionList(sortedRuleList);
        });

        this._resetDragState();

    }

    onRuleDragEnd() {
        this._resetDragState();
    }

    ruleTracker(index: number, rule: Rule) {
        return rule.id;
    }

    private _resetDragState() {
        this.draggedRule = null;
        this.draggedOverRule = null;
    }

}
