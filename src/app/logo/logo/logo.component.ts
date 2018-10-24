import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigurationResolver } from '../../configuration/configuration-resolver.service';
import { Logo } from '../logo.enum';

@Component({
    selector: 'wt-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

    logoPictureUrl$: Observable<string>;

    private _logoToPictureUrlMap = new Map<Logo, string>([
        [Logo.AngularConnect, 'angular-connect.svg'],
        [Logo.AngularConnect2018, 'angular-connect-2018.png'],
        [Logo.Wishtack, 'wishtack.svg']
    ]);

    constructor(private _configurationResolver: ConfigurationResolver) {
    }

    ngOnInit() {
        this.logoPictureUrl$ = this._configurationResolver.currentConfiguration$
            .pipe(
                map(configuration => {

                    const logo = configuration.logo;

                    if (logo == null || logo === Logo.None || !this._logoToPictureUrlMap.has(logo)) {
                        return null;
                    }

                    const pictureUrl = this._logoToPictureUrlMap.get(logo);

                    return require(`./${pictureUrl}`);

                })
            );
    }

}
