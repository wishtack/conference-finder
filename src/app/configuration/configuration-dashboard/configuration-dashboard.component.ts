import { Component } from '@angular/core';
import { Configuration } from '../configuration';

@Component({
    selector: 'wt-configuration-dashboard',
    templateUrl: './configuration-dashboard.component.html',
    styleUrls: ['./configuration-dashboard.component.css']
})
export class ConfigurationDashboardComponent {

    configurationList = [
        new Configuration()
    ];

    onConfigurationChange(configurationId: string, configuration: Configuration) {
        console.log(configuration);
    }

}
