import { Missile } from './Missile';


export abstract class SiegeEngine {
    private _kineticDamage: number
    private _load: Missile | null;
    constructor(kineticDamage: number) {
        this._kineticDamage = kineticDamage;
        this._load = null;
    }
    load(missile: Missile): void {
        this._load = missile;
    }
    loose(): boolean {
        if (this._load === null) {
            return false;
        }
        this._load.beThrown(this._kineticDamage);
        this._load = null;
        return true;
    }
}

export class Catapult extends SiegeEngine {
    constructor(kineticDamage: number) {
        super(kineticDamage);
    }
    loose(): boolean {
        console.log('Catapult: Loose!');
        return super.loose();
    }
}

export class Trebuchet extends SiegeEngine {
    constructor(kineticDamage: number) {
        super(kineticDamage);
    }
    loose(): boolean {
        console.log('Trebuchet: Loose!');
        return super.loose();
    }
}

export class Ballista extends SiegeEngine {
    constructor(kineticDamage: number) {
        super(kineticDamage);
    }
    loose(): boolean {
        console.log('Ballista: Loose!');
        return super.loose();
    }
}