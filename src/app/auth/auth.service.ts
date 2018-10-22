import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    isAdmin$: Observable<boolean>;
    isSignedIn$: Observable<boolean>;

    constructor(
        private _angularFireAuth: AngularFireAuth
    ) {

        this.isAdmin$ = this._angularFireAuth.idTokenResult
            .pipe(map(idTokenResult => idTokenResult.claims.admin === true));

        this.isSignedIn$ = this._angularFireAuth.user
            .pipe(map(user => user != null));

    }

    signIn() {
        return this._angularFireAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
    }

}
