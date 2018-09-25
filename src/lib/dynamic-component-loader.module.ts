/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { ModuleWithProviders, NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { ROUTES } from '@angular/router';
import { DYNAMIC_COMPONENT_MODULE_REGISTRY } from './internals';


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

    /**
     * @param args.id a unique id for the module.
     * @param args.path the module's path (e.g.: '../path/to/my-module.module#MyModule').
     */
    static declareModule(args: { moduleId: string, modulePath: string }): ModuleWithProviders {

        return {
            ngModule: DynamicComponentLoaderModule,
            providers: [
                {
                    /* Using the `ROUTES` opaque token in order to force the build of the lazy loaded modules. */
                    provide: ROUTES,
                    useValue: [{
                        path: args.modulePath,
                        loadChildren: args.modulePath
                    }],
                    multi: true
                },
                {
                    provide: DYNAMIC_COMPONENT_MODULE_REGISTRY,
                    useValue: args,
                    multi: true
                }
            ]
        };
    }

}
