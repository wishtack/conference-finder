import { ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConditionFormComponent } from '../condition-form-component';
import { ConditionDomain } from './condition-domain';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-condition-device-form',
    templateUrl: './condition-domain-form.component.html',
    styleUrls: ['./condition-domain-form.component.scss']
})
export class ConditionDomainFormComponent implements ConditionFormComponent {

    @Input() condition: ConditionDomain;
    @Output() conditionChange: Observable<ConditionDomain>;

    domainList = [
        'conference-finder.firebaseapp.com',
        'conference-finder.wishtack.io'
    ];
    domainControl = new FormControl();

    constructor() {

        this.conditionChange = this.domainControl.valueChanges
            .pipe(
                map(domain => {
                    return new ConditionDomain({
                        ...this.condition,
                        domain
                    });
                })
            );

    }

}
