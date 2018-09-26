import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatIconModule, MatMenuModule } from '@angular/material';
import { ConfigurationModule } from '../configuration/configuration.module';
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
        CommonModule,
        ConfigurationModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        LayoutModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class RuleModule {
}
