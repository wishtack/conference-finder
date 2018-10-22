import { ChangeDetectionStrategy, Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConditionFormComponent } from '../condition-form-component';
import { ConditionDevice, DeviceType } from './condition-device';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-condition-device-form',
    templateUrl: './condition-device-form.component.html',
    styleUrls: ['./condition-device-form.component.scss']
})
export class ConditionDeviceFormComponent implements ConditionFormComponent, OnChanges {

    @Input() condition: ConditionDevice;
    @Output() conditionChange: Observable<ConditionDevice>;

    deviceTypeList = Object.values(DeviceType);
    deviceTypeControl = new FormControl();

    constructor() {

        this.conditionChange = this.deviceTypeControl.valueChanges
            .pipe(
                map(deviceType => {
                    return new ConditionDevice({
                        ...this.condition,
                        deviceType
                    });
                })
            );

    }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.condition != null) {
            this.deviceTypeControl.setValue(this.condition.deviceType, {
                emitEvent: false
            });
        }

    }

}
