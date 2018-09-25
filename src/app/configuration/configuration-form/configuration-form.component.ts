import { Component, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Configuration } from '../configuration';

@Component({
    selector: 'wt-configuration-form',
    templateUrl: './configuration-form.component.html',
    styleUrls: ['./configuration-form.component.scss']
})
export class ConfigurationFormComponent {

    @Input() configuration: Configuration;
    @Output() configurationChange: Observable<Configuration>;

    configurationForm = new FormGroup({
        conferenceListDisplayMode: new FormControl()
    });

    constructor() {
        this.configurationChange = this.configurationForm.valueChanges
            .pipe(map(value => new Configuration(value)));
    }

}
