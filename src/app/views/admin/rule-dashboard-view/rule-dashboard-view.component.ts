import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
    selector: 'wt-rule-dashboard-view',
    templateUrl: './rule-dashboard-view.component.html',
    styleUrls: ['./rule-dashboard-view.component.scss']
})
export class RuleDashboardViewComponent {

    isAdmin$ = this._authService.isAdmin$;

    constructor(
        private _authService: AuthService
    ) {
    }

}
