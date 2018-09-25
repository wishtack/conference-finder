import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { DynamicComponentLoaderModule } from '../lib/dynamic-component-loader.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        DynamicComponentLoaderModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase),
        HttpClientModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
