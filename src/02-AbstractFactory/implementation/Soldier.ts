import { AbstractFactory } from "./Factory"


export class Soldier {
    private _weaponProvider: AbstractFactory;
    constructor(wp: AbstractFactory) {
        this._weaponProvider = wp;
    }

    killEmAll(): void {
        // grab the machine gun
        const mg = this._weaponProvider.createMachineGun();
        mg.fullAutoShoot();
        // overheat, switch to the rifle
        const ar = this._weaponProvider.createRifle();
        ar.semiAutoShoot();
        ar.semiAutoShoot();
        ar.semiAutoShoot();
        ar.fullAutoShoot();
        // ammo running out
        const handgun = this._weaponProvider.createPistol();
        handgun.semiAutoShoot();
        handgun.semiAutoShoot();
        // mission accomplished
    }
}