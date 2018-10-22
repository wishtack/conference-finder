/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDividerModule, MatRadioModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { ConfigurationFormComponent } from './configuration-form/configuration-form.component';

@NgModule({
    declarations: [
        ConfigurationFormComponent
    ],
    exports: [
        ConfigurationFormComponent
    ],
    imports: [
        MatButtonModule,
        MatDividerModule,
        MatRadioModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ConfigurationModule {
}
