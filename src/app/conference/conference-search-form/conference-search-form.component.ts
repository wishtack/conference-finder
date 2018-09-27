import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConferenceFilter } from '../conference-filter';
import { ConferenceRepository } from '../conference-repository';

@Component({
    selector: 'wt-conference-search-form',
    templateUrl: './conference-search-form.component.html',
    styleUrls: ['./conference-search-form.component.scss']
})
export class ConferenceSearchFormComponent implements OnChanges {

    @Input() conferenceFilter: ConferenceFilter;
    @Output() conferenceFilterChange: Observable<ConferenceFilter>;

    conferenceSearchForm = new FormGroup({
        topic: new FormControl()
    });
    topicList = this._conferenceRepository.topicList;

    constructor(private _conferenceRepository: ConferenceRepository) {

        this.conferenceFilterChange = this.conferenceSearchForm
            .valueChanges
            .pipe(map(value => {
                return new ConferenceFilter({
                    topicId: value.topic
                });
            }));

    }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.conferenceFilter != null) {

            const topicId = this.conferenceFilter != null ? this.conferenceFilter.topicId : null;

            this.conferenceSearchForm.reset({
                topic: topicId
            }, {
                emitEvent: false
            });

        }

    }

}
