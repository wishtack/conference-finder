import { ChangeDetectionStrategy, Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { ConditionFormComponent } from '../condition-form-component';
import { ConditionAudiencePercentage } from './condition-audience-percentage';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-condition-audience-percentage-form',
    templateUrl: './condition-audience-percentage-form.component.html',
    styleUrls: ['./condition-audience-percentage-form.component.scss']
})
export class ConditionAudiencePercentageFormComponent implements ConditionFormComponent, OnChanges {

    @Input() condition: ConditionAudiencePercentage;
    @Output() conditionChange: Observable<ConditionAudiencePercentage>;

    audiencePercentageControl = new FormControl();

    constructor() {
        this.conditionChange = this.audiencePercentageControl.valueChanges
            .pipe(
                debounceTime(100),
                map(audiencePercentage => {
                    return new ConditionAudiencePercentage({
                        ...this.condition,
                        audiencePercentage
                    });
                })
            );
    }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.condition != null) {
            this.audiencePercentageControl.setValue(this.condition.audiencePercentage, {
                emitEvent: false
            });
        }

    }

}
