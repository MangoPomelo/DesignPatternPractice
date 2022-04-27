import { AntiAirUnit } from './AntiAirUnit';


export class CommandSender {
    private _aa: AntiAirUnit;
    constructor(aa: AntiAirUnit) {
        this._aa = aa;
    }
    activate() {
        this._aa.setPowerState(true);
        this._aa.setRadarState(true);
        this._aa.setWeaponState(true);
        this._aa.fire();
    }
    deactivate() {
        this._aa.setPowerState(false);
        this._aa.setRadarState(false);
        this._aa.setWeaponState(false);
        this._aa.fire();
    }
}