import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, Type } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AbstractConditionFormComponent } from '../abstract-condition-form-component';
import { Condition } from '../condition';
import { ConditionFactory } from '../condition-factory';
import { ConditionRegistry } from '../condition-registry';
import { ConditionTypeInfo } from '../condition-type-info';

@Component({
    selector: 'wt-condition-form',
    templateUrl: './condition-form.component.html',
    styleUrls: ['./condition-form.component.scss']
})
export class ConditionFormComponent implements OnChanges, OnInit {

    @Input() condition: Condition;
    @Output() conditionChange = new EventEmitter<Condition>();

    conditionFormComponentClass: Type<AbstractConditionFormComponent>;
    conditionTypeControl = new FormControl();
    conditionTypeInfoList: ConditionTypeInfo[];

    inputs = {
        condition: null
    };
    outputs = {
        conditionChange: condition => this.conditionChange.emit(condition)
    };

    constructor(
        private _conditionFactory: ConditionFactory,
        private _conditionRegistry: ConditionRegistry
    ) {
        this.conditionTypeInfoList = this._conditionRegistry.getConditionTypeInfoList();
    }

    ngOnInit() {

        this.conditionTypeControl.valueChanges
            .subscribe(conditionType => {

                const condition = this._conditionFactory.createCondition({
                    type: conditionType
                });

                this.conditionChange.emit(condition);

            });

    }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.condition != null) {

            const conditionType = this.condition ? this.condition.type : null;

            this.conditionTypeControl.setValue(conditionType, {
                emitEvent: false
            });

            this.conditionFormComponentClass = this._conditionRegistry.getConditionFormComponentClass(conditionType);

            this.inputs = {
                condition: this.condition
            };

        }

    }


}
