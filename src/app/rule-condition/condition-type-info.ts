import { Type } from '@angular/core';
import { Condition } from './condition';
import { ConditionFormComponent } from './condition-form-component';

export interface ConditionVerifier {
    verify(condition: Condition): boolean;
}

export interface ConditionTypeInfo {
    conditionClass: Type<Condition>;
    conditionFormComponentClass: Type<ConditionFormComponent>;
    conditionVerifier: ConditionVerifier;
    label: string;
    type: string;
}
