import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { DynamicComponentLoaderModule } from '../lib/dynamic-component-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        DynamicComponentLoaderModule.forRoot(),
        HttpClientModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
