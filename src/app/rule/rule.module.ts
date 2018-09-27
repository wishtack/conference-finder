import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatSliderModule
} from '@angular/material';
import { DynamicModule } from 'ng-dynamic-component';
import { ConfigurationModule } from '../configuration/configuration.module';
import { SharedModule } from '../shared/shared.module';
import { ConditionAudiencePercentageFormComponent } from './condition-audience-percentage-form/condition-audience-percentage-form.component';
import { ConditionFormContainerComponent } from './condition-form-container/condition-form-container.component';
import { RuleDashboardComponent } from './rule-dashboard/rule-dashboard.component';
import { RuleFormComponent } from './rule-form/rule-form.component';

@NgModule({
    declarations: [
        RuleDashboardComponent,
        RuleFormComponent,
        ConditionFormContainerComponent,
        ConditionAudiencePercentageFormComponent
    ],
    exports: [
        RuleDashboardComponent,
        RuleFormComponent,
        ConditionAudiencePercentageFormComponent
    ],
    imports: [
        CommonModule,
        ConfigurationModule,
        DynamicModule.withComponents([
            ConditionAudiencePercentageFormComponent
        ]),
        LayoutModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatSliderModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class RuleModule {
}
