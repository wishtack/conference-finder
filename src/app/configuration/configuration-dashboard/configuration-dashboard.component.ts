import { Component, OnDestroy, OnInit } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Configuration } from '../configuration';
import { ConfigurationRepository } from '../configuration-repository';

@Component({
    selector: 'wt-configuration-dashboard',
    templateUrl: './configuration-dashboard.component.html',
    styleUrls: ['./configuration-dashboard.component.css']
})
export class ConfigurationDashboardComponent implements OnDestroy, OnInit {

    configurationList = [
        new Configuration()
    ];

    private _scavenger = new Scavenger(this);

    constructor(private _configurationRepository: ConfigurationRepository) {
    }

    ngOnInit() {
        this._configurationRepository.watchConfigurationList()
            .pipe(this._scavenger.collect())
            .subscribe(configurationList => this.configurationList = configurationList);
    }

    onConfigurationChange(configurationId: string, configuration: Configuration) {
        this._configurationRepository.updateConfiguration(configurationId, configuration);
    }

    ngOnDestroy() {
    }

}
