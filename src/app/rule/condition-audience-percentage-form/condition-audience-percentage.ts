/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { Condition } from '../condition';
import { ConditionTypeInfo } from '../condition-type-info';
import { ConditionAudiencePercentageFormComponent } from './condition-audience-percentage-form.component';


export class ConditionAudiencePercentage implements Condition {

    static type = 'audience-percentage';

    type = conditionAudiencePercentageTypeInfo.type;

    audiencePercentage: number;

    constructor(args: Partial<ConditionAudiencePercentage> = {}) {
        this.audiencePercentage = args.audiencePercentage;
    }

}

export const conditionAudiencePercentageTypeInfo: ConditionTypeInfo = {
    conditionClass: ConditionAudiencePercentage,
    conditionFormComponentClass: ConditionAudiencePercentageFormComponent,
    label: 'Audience Percentage',
    type: ConditionAudiencePercentage.type
};
