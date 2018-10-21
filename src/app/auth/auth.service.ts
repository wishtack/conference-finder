import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private _angularFireAuth: AngularFireAuth
    ) {
    }

    get isSignedIn$() {
        return this._angularFireAuth.user
            .pipe(map(user => user != null));
    }

    signIn() {
        return this._angularFireAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
    }
}
