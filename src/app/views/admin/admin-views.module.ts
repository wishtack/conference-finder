/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { Route, RouterModule } from '@angular/router';
import { IsSignedInGuard } from '../../auth/is-signed-in.guard';
import { RuleModule } from '../../rule/rule.module';
import { SharedModule } from '../../shared/shared.module';
import { adminRouteResolver } from './admin-route-resolver';
import { RuleDashboardViewComponent } from './rule-dashboard-view/rule-dashboard-view.component';
import { SigninViewComponent } from './signin-view/signin-view.component';

export const adminRoutes: Route[] = [
    {
        path: adminRouteResolver.SIGNIN_PATH,
        component: SigninViewComponent
    },
    {
        path: adminRouteResolver.RULES_PATH,
        canActivate: [
            IsSignedInGuard
        ],
        component: RuleDashboardViewComponent
    },
    {
        path: '**',
        redirectTo: adminRouteResolver.RULES_PATH
    }
];

@NgModule({
    imports: [
        MatButtonModule,
        MatProgressSpinnerModule,
        RuleModule,
        RouterModule.forChild(adminRoutes),
        SharedModule
    ],
    declarations: [
        RuleDashboardViewComponent,
        SigninViewComponent
    ]
})
export class AdminViewsModule {
}
