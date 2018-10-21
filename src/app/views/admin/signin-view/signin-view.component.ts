import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';
import { AuthService } from '../../../auth/auth.service';
import { adminRouteResolver } from '../admin-route-resolver';

@Component({
    selector: 'wt-signin-view',
    templateUrl: './signin-view.component.html',
    styleUrls: ['./signin-view.component.scss']
})
export class SigninViewComponent implements OnInit {

    isSignedIn$: Observable<boolean>;
    isSignedInButtonDisplayed$: Observable<boolean>;

    constructor(
        private _authService: AuthService,
        private _router: Router
    ) {
        this.isSignedIn$ = this._authService.isSignedIn$;
        this.isSignedInButtonDisplayed$ = this.isSignedIn$.pipe(map(isSignedIn => isSignedIn === false));
    }

    ngOnInit() {
        this.isSignedIn$
            .pipe(
                first(),
                filter(isSignedIn => isSignedIn)
            )
            .subscribe(() => this._router.navigate(adminRouteResolver.getAdminRoute()));
    }

    signIn() {
        this._authService.signIn();
    }

}
