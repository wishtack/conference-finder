import { Type } from '@angular/core';
import { Condition } from './condition';
import { ConditionFormComponent } from './condition-form-component';

export interface ConditionVerifier {
    verify(condition: Condition): boolean;
}

export interface ConditionClass {
    type: string;

    new(...args): Condition;
}

export interface ConditionTypeInfo {
    conditionClass: ConditionClass;
    conditionFormComponentClass: Type<ConditionFormComponent>;
    conditionVerifier: ConditionVerifier;
    label: string;
}
