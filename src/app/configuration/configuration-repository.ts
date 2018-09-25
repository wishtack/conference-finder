/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Configuration } from './configuration';

@Injectable({
    providedIn: 'root'
})
export class ConfigurationRepository {

    private _collection: AngularFirestoreCollection<Configuration>;

    constructor(private _angularFirestore: AngularFirestore) {
        this._collection = this._angularFirestore.collection<Configuration>('rules');
    }

    watchConfigurationList() {
        return this._collection
            .stateChanges()
            .pipe(map(actionList => actionList.map(action => new Configuration({
                id: action.payload.doc.id,
                ...action.payload.doc.data()
            }))));
    }

    updateConfiguration(configurationId: string, configuration: Configuration) {

        const data = {...configuration};

        delete data['id'];

        return this._collection.doc<Configuration>(configurationId).update(data);

    }

}
