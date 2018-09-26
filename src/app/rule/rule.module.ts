import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule } from '@angular/material';
import { ConfigurationModule } from '../configuration/configuration.module';
import { SharedModule } from '../shared/shared.module';
import { ConditionAudiencePercentageFormComponent } from './condition-audience-percentage-form/condition-audience-percentage-form.component';
import { ConditionFormComponent } from './condition-form/condition-form.component';
import { RuleDashboardComponent } from './rule-dashboard/rule-dashboard.component';
import { RuleFormComponent } from './rule-form/rule-form.component';

@NgModule({
    declarations: [
        RuleDashboardComponent,
        RuleFormComponent,
        ConditionFormComponent,
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
        LayoutModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class RuleModule {
}
