import { IGrenade, ExplosiveGrenade, FlareGrenade, SmokeGrenade } from './Grenade';


export abstract class M79 {
    private _isLoaded: boolean;
    private _isSafetyOn: boolean;

    constructor() {
        this._isLoaded = false;
        this._isSafetyOn = true;
    }

    abstract loadGrenade(): IGrenade

    launch(): void {
        // load grenade
        const grenade = this.loadGrenade();
        this._isLoaded = true;
        // safety off
        this._isSafetyOn = false;
        // shoot
        console.log('M79 launchs: 🚀');
        const timer = setTimeout((): void => {
            grenade.detonate();
            clearTimeout(timer);
        }, 2000);
        // eject shell
        this._isLoaded = false;
        // safety on
        this._isSafetyOn = true;
    }
}

export class SmokeM79 extends M79 {
    loadGrenade(): IGrenade {
        return new SmokeGrenade();
    }
}

export class FlareM79 extends M79 {
    loadGrenade(): IGrenade {
        return new FlareGrenade();
    }
}

export class ExplosiveM79 extends M79 {
    loadGrenade(): IGrenade {
        return new ExplosiveGrenade();
    }
}