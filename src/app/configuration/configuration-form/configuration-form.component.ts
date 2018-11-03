import { ChangeDetectionStrategy, Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ConferenceListDisplayMode } from '../../conference/conference-list-display-mode.enum';
import { ConferenceSearchDisplayMode } from '../../conference/conference-search-display-mode.enum';
import { Theme } from '../../conference/theme.enum';
import { Logo } from '../../logo/logo.enum';
import { Configuration } from '../configuration';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
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
    Logo = Logo;
    Theme = Theme;

    configurationForm = new FormGroup({
        backgroundColor: new FormControl(),
        conferenceListDisplayMode: new FormControl(),
        conferenceSearchDisplayMode: new FormControl(),
        logo: new FormControl(),
        shouldShowLinks: new FormControl(),
        theme: new FormControl()
    });

    constructor() {
        this.configurationChange = this.configurationForm.valueChanges
            .pipe(tap(console.log))
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
