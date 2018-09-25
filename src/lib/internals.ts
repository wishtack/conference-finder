/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { InjectionToken } from '@angular/core';

export interface ModuleRegistryItem {
    moduleId: string;
    modulePath: string;
}

export const DYNAMIC_COMPONENT_MODULE_REGISTRY = new InjectionToken<ModuleRegistryItem>('DYNAMIC_COMPONENT_MODULE_REGISTRY');
