/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ConfigurationViewComponent } from './configuration-view/configuration-view.component';

export const adminRoutes: Route[] = [
    {
        path: 'config',
        component: ConfigurationViewComponent
    },
    {
        path: '**',
        redirectTo: 'config'
    }
];

@NgModule({
    declarations: [
        ConfigurationViewComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(adminRoutes)
    ]
})
export class AdminViewsModule {
}
