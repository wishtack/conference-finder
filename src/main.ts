import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { setGoogleSiteTag } from './lib/set-google-site-tag';

if (environment.googleTrackingId != null) {
    setGoogleSiteTag(environment.googleTrackingId);
}

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));

