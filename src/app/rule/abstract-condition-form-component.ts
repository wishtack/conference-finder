import { Observable } from 'rxjs';
import { Condition } from './condition';

export interface AbstractConditionFormComponent {
    condition: Condition;
    conditionChange: Observable<Condition>;
}
