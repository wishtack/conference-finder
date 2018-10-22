/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { Condition } from '../condition';


export class ConditionAudiencePercentage implements Condition {

    static type = 'audience-percentage';

    type = ConditionAudiencePercentage.type;

    audiencePercentage: number;

    constructor(args: Partial<ConditionAudiencePercentage> = {}) {
        this.audiencePercentage = args.audiencePercentage;
    }

}
