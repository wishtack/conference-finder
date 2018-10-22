import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, Type } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Condition } from '../condition';
import { ConditionFactory } from '../condition-factory';
import { ConditionFormComponent } from '../condition-form-component';
import { ConditionRegistry } from '../condition-registry';
import { ConditionTypeInfo } from '../condition-type-info';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-condition-form-container',
    templateUrl: './condition-form-container.component.html',
    styleUrls: ['./condition-form-container.component.scss']
})
export class ConditionFormContainerComponent implements OnChanges, OnInit {

    @Input() condition: Condition;
    @Output() conditionChange = new EventEmitter<Condition>();

    conditionFormComponentClass: Type<ConditionFormComponent>;
    conditionTypeControl = new FormControl();
    conditionTypeInfoList: ConditionTypeInfo[];
    onConditionChange = (condition: Condition) => this.conditionChange.emit(condition);

    constructor(
        private _conditionFactory: ConditionFactory,
        private _conditionRegistry: ConditionRegistry
    ) {
        this.conditionTypeInfoList = this._conditionRegistry.getConditionTypeInfoList();
    }

    ngOnInit() {

        /* Create a new condition object when the user selects a new condition type and propagate to parent. */
        this.conditionTypeControl.valueChanges
            .subscribe(conditionType => {

                const condition = this._conditionFactory.createCondition({
                    type: conditionType
                });

                this.conditionChange.emit(condition);

            });

    }

    ngOnChanges(changes: SimpleChanges) {

        /* When the condition type changes... */
        if (changes.condition != null) {

            const conditionType = this.condition ? this.condition.type : null;

            /* ... reset the condition type control when the condition type changes...*/
            this.conditionTypeControl.setValue(conditionType, {
                emitEvent: false
            });

            /* ... and select the right component. */
            this.conditionFormComponentClass = this._conditionRegistry.getConditionFormComponentClass(conditionType);

        }

    }

}
