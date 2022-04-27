import { Kit } from './Kit';


export interface IBuilder {
    packPrimaryWeapon(): void;
    packSecondaryWeapon(isSubmachineGun: boolean): void;
    packMeleeWeapon(): void;
    packThrowableWeapon(isLethal: boolean): void;
    packArmor(withSteelPlate: boolean): void;
    packHelmet(withNightVision: boolean): void;
    getKit(): Kit;
}

export class SniperKitBuilder implements IBuilder {
    private _kit: Kit;
    constructor() {
        this._kit = new Kit();
    }

    private _reset(): void {
        this._kit = new Kit();
    }

    packPrimaryWeapon(): void {
        this._kit.addOnHand('M24');
    }
    packSecondaryWeapon(isSubmachineGun: boolean): void {
        this._kit.addOnHand(isSubmachineGun? 'MP7': 'P226');
    }
    packMeleeWeapon(): void {
        this._kit.addOnHand('bayonet');
    }
    packThrowableWeapon(isLethal: boolean): void {
        this._kit.addOnHand(isLethal? 'M67': 'M18');
    }

    packArmor(withSteelPlate: boolean): void {
        this._kit.addBodygear(withSteelPlate? 'vest': 'rig')
    }
    packHelmet(withNightVision: boolean): void {
        this._kit.addHeadwear(withNightVision? 'helmet with NVG': 'helmet');
    }

    getKit(): Kit {
        const toReturn = this._kit;
        this._reset();
        return toReturn;
    }
}

export class BreachManKitBuilder implements IBuilder {
    private _kit: Kit;
    constructor() {
        this._kit = new Kit();
    }

    private _reset(): void {
        this._kit = new Kit();
    }

    packPrimaryWeapon(): void {
        this._kit.addOnHand('AA12');
    }
    packSecondaryWeapon(isSubmachineGun: boolean): void {
        this._kit.addOnHand(isSubmachineGun? 'G18': 'M9');
    }
    packMeleeWeapon(): void {
        this._kit.addOnHand('SEAL');
    }
    packThrowableWeapon(isLethal: boolean): void {
        this._kit.addOnHand(isLethal? 'M67': 'M84');
    }

    packArmor(withSteelPlate: boolean): void {
        this._kit.addBodygear(withSteelPlate? 'vest': 'rig')
    }
    packHelmet(withNightVision: boolean): void {
        this._kit.addHeadwear(withNightVision? 'helmet with NVG': 'helmet');
    }

    getKit(): Kit {
        const toReturn = this._kit;
        this._reset();
        return toReturn;
    }
}