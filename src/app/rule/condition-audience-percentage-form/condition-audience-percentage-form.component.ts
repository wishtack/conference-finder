import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractConditionFormComponent } from '../abstract-condition-form-component';
import { Condition } from '../condition';

@Component({
    selector: 'wt-condition-audience-percentage-form',
    templateUrl: './condition-audience-percentage-form.component.html',
    styleUrls: ['./condition-audience-percentage-form.component.scss']
})
export class ConditionAudiencePercentageFormComponent implements AbstractConditionFormComponent {

    @Input() condition: Condition;
    @Output() conditionChange = new EventEmitter<Condition>();

}
