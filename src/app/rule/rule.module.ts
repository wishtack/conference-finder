import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDividerModule, MatExpansionModule, MatIconModule, MatMenuModule } from '@angular/material';
import { ConfigurationModule } from '../configuration/configuration.module';
import { RuleConditionModule } from '../rule-condition/rule-condition.module';
import { SharedModule } from '../shared/shared.module';
import { RuleDashboardComponent } from './rule-dashboard/rule-dashboard.component';
import { RuleFormComponent } from './rule-form/rule-form.component';

@NgModule({
    declarations: [
        RuleDashboardComponent,
        RuleFormComponent
    ],
    exports: [
        RuleDashboardComponent,
        RuleFormComponent
    ],
    imports: [
        ConfigurationModule,
        LayoutModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatExpansionModule,
        MatIconModule,
        MatMenuModule,
        RuleConditionModule,
        SharedModule
    ]
})
export class RuleModule {
}
