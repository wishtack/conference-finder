/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { ConditionVerifier } from '../condition-type-info';
import { ConditionDevice, DeviceType } from './condition-device';

@Injectable({
    providedIn: 'root'
})
export class ConditionDeviceVerifier implements ConditionVerifier {

    private readonly _deviceUserAgentRegExpMap = new Map<DeviceType, RegExp>([
        [DeviceType.Android, /android/i],
        [DeviceType.Ios, /ipad|iphone|ipod/i]
    ]);

    verify(condition: ConditionDevice) {

        const regexp = this._deviceUserAgentRegExpMap.get(condition.deviceType);

        if (regexp == null) {
            return false;
        }

        return navigator.userAgent.match(regexp) != null;

    }

}
