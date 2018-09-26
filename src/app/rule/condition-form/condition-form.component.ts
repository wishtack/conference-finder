import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Condition } from '../condition';
import { ConditionFactory } from '../condition-factory';
import { ConditionTypeInfo } from '../condition-type-info';

@Component({
    selector: 'wt-condition-form',
    templateUrl: './condition-form.component.html',
    styleUrls: ['./condition-form.component.scss']
})
export class ConditionFormComponent implements OnChanges, OnInit {

    @Input() condition: Condition;
    @Output() conditionChange = new EventEmitter<Condition>();

    conditionTypeControl = new FormControl();
    conditionTypeInfoList: ConditionTypeInfo[];

    constructor(private _conditionFactory: ConditionFactory) {
        this.conditionTypeInfoList = this._conditionFactory.getConditionTypeInfoList();
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
            this.conditionTypeControl.setValue(this.condition ? this.condition.type : null, {
                emitEvent: false
            });
        }

    }


}
