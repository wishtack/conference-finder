import { ConditionTypeInfo } from '../condition-type-info';
import { ConditionAudiencePercentage } from './condition-audience-percentage';
import { ConditionAudiencePercentageFormComponent } from './condition-audience-percentage-form.component';

export const conditionAudiencePercentageTypeInfo: ConditionTypeInfo = {
    conditionClass: ConditionAudiencePercentage,
    conditionFormComponentClass: ConditionAudiencePercentageFormComponent,
    label: 'Audience Percentage',
    type: ConditionAudiencePercentage.type
};
