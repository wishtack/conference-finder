/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { async, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ConferenceListDisplayMode } from '../conference/conference-list-display-mode';
import { ConferenceSearchDisplayMode } from '../conference/conference-search-display-mode';
import { ConditionAudiencePercentage } from '../rule/condition-audience-percentage-form/condition-audience-percentage';
import { Rule } from '../rule/rule';
import { RuleRepository } from '../rule/rule-repository';
import { Configuration } from './configuration';
import { CurrentConfigurationService } from './current-configuration.service';
import Spy = jasmine.Spy;

describe('CurrentConfigurationService', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: RuleRepository,
                    useValue: jasmine.createSpyObj(['watchRuleList'])
                }
            ]
        }).compileComponents();
    }));

    let currentConfigurationService: CurrentConfigurationService;
    beforeEach(() => currentConfigurationService = TestBed.get(CurrentConfigurationService));

    let ruleRepository: RuleRepository;
    beforeEach(() => ruleRepository = TestBed.get(RuleRepository));

    it('should merge configurations', () => {

        (ruleRepository.watchRuleList as Spy).and.returnValue(of([
            new Rule({
                id: 'ID_1',
                position: 1,
                configuration: new Configuration({
                    conferenceSearchDisplayMode: ConferenceSearchDisplayMode.Form,
                    conferenceListDisplayMode: ConferenceListDisplayMode.V1
                })
            }),
            new Rule({
                id: 'ID_2',
                position: 2,
                condition: new ConditionAudiencePercentage({
                    audiencePercentage: 0
                }),
                configuration: new Configuration({
                    conferenceSearchDisplayMode: ConferenceSearchDisplayMode.Chips,
                    conferenceListDisplayMode: ConferenceListDisplayMode.V2
                })
            }),
            new Rule({
                id: 'ID_3',
                position: 3,
                condition: new ConditionAudiencePercentage({
                    audiencePercentage: 100
                }),
                configuration: new Configuration({
                    conferenceSearchDisplayMode: null,
                    conferenceListDisplayMode: ConferenceListDisplayMode.V2
                })
            })
        ]));

        let configuration: Configuration;
        currentConfigurationService.watchCurrentConfiguration().subscribe(_configuration => configuration = _configuration);

        expect(configuration).toEqual(new Configuration({
            conferenceSearchDisplayMode: ConferenceSearchDisplayMode.Form,
            conferenceListDisplayMode: ConferenceListDisplayMode.V2
        }));

    });

});
