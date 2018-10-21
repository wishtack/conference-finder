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
import { RuleDashboardComponent } from '../../rule/rule-dashboard/rule-dashboard.component';
import { RuleModule } from '../../rule/rule.module';
import { SharedModule } from '../../shared/shared.module';
import { adminRouteResolver } from './admin-route-resolver';
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
        component: RuleDashboardComponent
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
    declarations: [SigninViewComponent]
})
export class AdminViewsModule {
}
