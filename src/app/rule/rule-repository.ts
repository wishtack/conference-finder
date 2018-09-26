/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Rule } from './rule';

@Injectable({
    providedIn: 'root'
})
export class RuleRepository {

    private _collection: AngularFirestoreCollection<Rule>;

    constructor(private _angularFirestore: AngularFirestore) {
        this._collection = this._angularFirestore.collection<Rule>('rules');
    }

    watchConfigurationList() {
        return this._collection
            .stateChanges()
            .pipe(map(actionList => actionList.map(action => new Rule({
                id: action.payload.doc.id,
                ...action.payload.doc.data()
            }))));
    }

    updateRule(ruleId: string, rule: Rule) {

        /* @HACK: Hacky way to avoid custom type errors with firebase. */
        const data = JSON.parse(JSON.stringify(rule));

        delete data['id'];

        return this._collection.doc<Rule>(ruleId).update(data);

    }

}
