import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatRadioModule, MatSelectModule, MatSliderModule } from '@angular/material';
import { DynamicModule } from 'ng-dynamic-component';
import { SharedModule } from '../shared/shared.module';
import { ConditionAudiencePercentageFormComponent } from './condition-audience-percentage-form/condition-audience-percentage-form.component';
import { ConditionDeviceFormComponent } from './condition-device-form/condition-device-form.component';
import { ConditionFormContainerComponent } from './condition-form-container/condition-form-container.component';

@NgModule({
    declarations: [
        ConditionAudiencePercentageFormComponent,
        ConditionDeviceFormComponent,
        ConditionFormContainerComponent
    ],
    entryComponents: [
        ConditionAudiencePercentageFormComponent,
        ConditionDeviceFormComponent
    ],
    exports: [
        ConditionFormContainerComponent
    ],
    imports: [
        CommonModule,
        DynamicModule,
        MatFormFieldModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class RuleConditionModule {
}
