/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RuleDashboardComponent } from '../../rule/rule-dashboard/rule-dashboard.component';
import { RuleModule } from '../../rule/rule.module';

export const adminRoutes: Route[] = [
    {
        path: 'rules',
        component: RuleDashboardComponent
    },
    {
        path: '**',
        redirectTo: 'rules'
    }
];

@NgModule({
    imports: [
        CommonModule,
        RuleModule,
        RouterModule.forChild(adminRoutes)
    ]
})
export class AdminViewsModule {
}
