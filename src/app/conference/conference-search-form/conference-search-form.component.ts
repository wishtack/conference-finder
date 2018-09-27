import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'wt-conference-search-form',
    templateUrl: './conference-search-form.component.html',
    styleUrls: ['./conference-search-form.component.scss']
})
export class ConferenceSearchFormComponent {

    conferenceSearchForm = new FormGroup({});

}
