/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { Condition } from '../condition';


export enum DeviceType {
    Android = 'android',
    Ios = 'ios'
}

export class ConditionDevice implements Condition {

    static type = 'device';

    type = ConditionDevice.type;

    deviceType: DeviceType;

    constructor(args: Partial<ConditionDevice> = {}) {
        this.deviceType = args.deviceType;
    }

}
