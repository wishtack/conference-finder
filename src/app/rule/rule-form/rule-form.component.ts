import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Configuration } from '../../configuration/configuration';
import { Condition } from '../../rule-condition/condition';
import { Rule } from '../rule';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-rule-form',
    templateUrl: './rule-form.component.html',
    styleUrls: ['./rule-form.component.scss']
})
export class RuleFormComponent {

    @Input() rule: Rule;
    @Input() shouldShowConditions = true;
    @Input() shouldShowInheritOption = true;
    @Output() ruleChange = new EventEmitter<Rule>();

    onConditionChange(condition: Condition) {
        this.ruleChange.emit(new Rule({
            ...this.rule,
            condition
        }));
    }

    onConfigurationChange(configuration: Configuration) {
        this.ruleChange.emit(new Rule({
            ...this.rule,
            configuration
        }));
    }

}
