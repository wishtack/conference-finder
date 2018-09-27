import { Type } from '@angular/core';
import { Condition } from './condition';
import { ConditionFormComponent } from './condition-form-component';

export interface ConditionTypeInfo {
    conditionClass: Type<Condition>;
    conditionFormComponentClass: Type<ConditionFormComponent>;
    label: string;
    type: string;
}
