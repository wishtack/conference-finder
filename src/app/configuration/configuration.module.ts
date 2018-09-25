import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatMenuModule, MatRadioModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { ConfigurationDashboardComponent } from './configuration-dashboard/configuration-dashboard.component';
import { ConfigurationFormComponent } from './configuration-form/configuration-form.component';

@NgModule({
    declarations: [
        ConfigurationDashboardComponent,
        ConfigurationFormComponent
    ],
    exports: [
        ConfigurationDashboardComponent,
        ConfigurationFormComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
        MatRadioModule,
        LayoutModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ConfigurationModule {
}
