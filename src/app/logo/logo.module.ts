import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LogoComponent } from './logo/logo.component';

@NgModule({
    declarations: [
        LogoComponent
    ],
    exports: [
        LogoComponent
    ],
    imports: [
        SharedModule
    ]
})
export class LogoModule {
}
