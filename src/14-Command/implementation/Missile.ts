import { Structure } from './Structure';

export abstract class Missile {
    private _target: Structure;
    private _massDamage: number;
    private _additionalDamage: number;
    constructor(target: Structure, massDamage: number, additionalDamage: number) {
        this._target = target;
        this._massDamage = massDamage;
        this._additionalDamage = additionalDamage;
    }
    beThrown(baseDamage: number): void {
        const totalDamage = baseDamage + this._massDamage + this._additionalDamage;
        console.log(`Apply ${totalDamage} damage to the target!`);
        this._target.damage(totalDamage);
        if (this._target.isDestroyed()) {
            this._target.onDestroy();
        }
    }
}

export class Barrel extends Missile {
    constructor(target: Structure, massDamage: number, additionalDamage: number) {
        super(target, massDamage, additionalDamage);
    }
    beThrown(baseDamage: number): void {
        console.log('Barrel is launched!');
        super.beThrown(baseDamage);
    }
}

export class Stone extends Missile {
    constructor(target: Structure, massDamage: number, additionalDamage: number) {
        super(target, massDamage, additionalDamage);
    }
    beThrown(baseDamage: number): void {
        console.log('Stone is launched!');
        super.beThrown(baseDamage);
    }
}

export class FirePot extends Missile {
    constructor(target: Structure, massDamage: number, additionalDamage: number) {
        super(target, massDamage, additionalDamage);
    }
    beThrown(baseDamage: number): void {
        console.log('FirePot is launched!');
        super.beThrown(baseDamage);
    }
}

export class DeadBody extends Missile {
    constructor(target: Structure, massDamage: number, additionalDamage: number) {
        super(target, massDamage, additionalDamage);
    }
    beThrown(baseDamage: number): void {
        console.log('DeadBody is launched!');
        super.beThrown(baseDamage);
    }
}