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
            .snapshotChanges()
            .pipe(map(actionList => actionList.map(action => new Rule({
                id: action.payload.doc.id,
                ...action.payload.doc.data()
            }))));
    }

    async createRule(rule: Rule) {

        const data = await this._collection.add(this._ruleToData(rule));

        return new Rule({
            ...rule,
            id: data.id
        });

    }

    async updateRule(ruleId: string, rule: Rule) {

        const data = this._ruleToData(rule);

        delete data['id'];

        return this._collection.doc<Rule>(ruleId).update(data);

    }

    async removeRule(ruleId: any) {

        return this._collection.doc<Rule>(ruleId).delete();

    }

    private _ruleToData(rule: Rule) {

        /* @HACK: Hacky way to avoid custom type errors with firebase. */
        return JSON.parse(JSON.stringify(rule));

    }
}
