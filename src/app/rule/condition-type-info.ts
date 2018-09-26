import { Type } from '@angular/core';
import { AbstractConditionFormComponent } from './abstract-condition-form-component';
import { Condition } from './condition';

export interface ConditionTypeInfo {
    conditionClass: Type<Condition>;
    conditionFormComponentClass: Type<AbstractConditionFormComponent>;
    label: string;
    type: string;
}
