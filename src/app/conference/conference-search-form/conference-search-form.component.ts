import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConferenceRepository } from '../conference-repository';

@Component({
    selector: 'wt-conference-search-form',
    templateUrl: './conference-search-form.component.html',
    styleUrls: ['./conference-search-form.component.scss']
})
export class ConferenceSearchFormComponent {

    conferenceSearchForm = new FormGroup({
        topic: new FormControl()
    });
    topicList = this._conferenceRepository.topicList;

    constructor(private _conferenceRepository: ConferenceRepository) {
    }

}
