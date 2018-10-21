import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { adminRouteResolver } from '../views/admin/admin-route-resolver';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class IsSignedInGuard implements CanActivate {

    constructor(
        private _authService: AuthService,
        private _router: Router
    ) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {

        return this._authService.isSignedIn$
            .pipe(
                first(),
                tap(isSignedIn => {

                    if (!isSignedIn) {
                        this._router.navigate(adminRouteResolver.getSigninRoute());
                    }

                })
            );

    }
}
