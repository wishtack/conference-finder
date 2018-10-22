import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConferenceListDisplayMode } from '../../conference/conference-list-display-mode';
import { ConferenceSearchDisplayMode } from '../../conference/conference-search-display-mode';
import { Theme } from '../../conference/theme';
import { Configuration } from '../configuration';

@Component({
    selector: 'wt-configuration-form',
    templateUrl: './configuration-form.component.html',
    styleUrls: ['./configuration-form.component.scss']
})
export class ConfigurationFormComponent implements OnChanges {

    @Input() configuration: Configuration;
    @Input() shouldShowInheritOption: boolean;
    @Output() configurationChange: Observable<Configuration>;

    ConferenceListDisplayMode = ConferenceListDisplayMode;
    ConferenceSearchDisplayMode = ConferenceSearchDisplayMode;
    Theme = Theme;

    configurationForm = new FormGroup({
        backgroundColor: new FormControl(),
        conferenceListDisplayMode: new FormControl(),
        conferenceSearchDisplayMode: new FormControl(),
        theme: new FormControl()
    });

    constructor() {
        this.configurationChange = this.configurationForm.valueChanges
            .pipe(map(value => new Configuration(value)));
    }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.configuration != null) {
            this.configurationForm.reset(this.configuration, {
                emitEvent: false
            });
        }

    }

}
