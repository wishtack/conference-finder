import { Observable } from 'rxjs';
import { Condition } from './condition';

export interface ConditionFormComponent {
    condition: Condition;
    conditionChange: Observable<Condition>;
}
