import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Configuration } from '../../configuration/configuration';
import { Rule } from '../rule';

@Component({
    selector: 'wt-rule-form',
    templateUrl: './rule-form.component.html',
    styleUrls: ['./rule-form.component.scss']
})
export class RuleFormComponent {

    @Input() rule: Rule;
    @Output() ruleChange = new EventEmitter<Rule>();

    onConfigurationChange(configuration: Configuration) {
        this.ruleChange.emit(new Rule({
            ...this.rule,
            configuration
        }));
    }

}
