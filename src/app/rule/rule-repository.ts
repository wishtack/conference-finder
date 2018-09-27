/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { ConditionFactory } from './condition-factory';
import { Rule } from './rule';

@Injectable({
    providedIn: 'root'
})
export class RuleRepository {

    private _collection: AngularFirestoreCollection<Rule>;

    constructor(
        private _angularFirestore: AngularFirestore,
        private _conditionFactory: ConditionFactory
    ) {
        this._collection = this._angularFirestore.collection<Rule>('rules', ref => ref.orderBy('position'));
    }

    watchRuleList() {
        return this._collection
            .snapshotChanges()
            .pipe(map(actionList => actionList.map(action => {

                const ruleData = action.payload.doc.data();

                return new Rule({
                    id: action.payload.doc.id,
                    ...ruleData,
                    condition: this._conditionFactory.createCondition(ruleData.condition)
                });

            })));
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

    async updateRulePositionList(ruleList: Rule[]) {

        const batch = this._angularFirestore.firestore.batch();

        for (const rule of ruleList) {
            batch.update(this._collection.doc<Rule>(rule.id).ref, {
                position: rule.position
            });
        }

        return batch.commit();

    }

    async removeRule(ruleId: string, ruleList: Rule[]) {

        await this._collection.doc<Rule>(ruleId).delete();

        ruleList = ruleList.filter(rule => rule.id !== ruleId);

        await this.updateRulePositionList(ruleList);

    }

    private _ruleToData(rule: Rule) {

        /* @HACK: Hacky way to avoid custom type errors with firebase. */
        return JSON.parse(JSON.stringify(rule));

    }
}
