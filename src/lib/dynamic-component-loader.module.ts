/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { ModuleWithProviders, NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { ROUTES } from '@angular/router';


@NgModule({
    declarations: [],
    exports: []
})
export class DynamicComponentLoaderModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DynamicComponentLoaderModule,
            providers: [
                {
                    provide: NgModuleFactoryLoader,
                    useClass: SystemJsNgModuleLoader
                }
            ]
        };
    }

    static declareModule(moduleUri: string): ModuleWithProviders {

        return {
            ngModule: DynamicComponentLoaderModule,
            providers: [
                {
                    /* Using the `ROUTES` opaque token in order to force the build of the lazy loaded modules. */
                    provide: ROUTES,
                    useValue: [{
                        path: moduleUri,
                        loadChildren: moduleUri
                    }],
                    multi: true
                }
            ]
        };
    }

}
