import { IBuilder } from './Builder';
import { Kit } from './Kit';


export class Quartermaster {
    private _builder: IBuilder;
    constructor(builder: IBuilder) {
        this._builder = builder;
    }

    provideForPatrolman(): Kit {
        this._builder.packPrimaryWeapon();
        this._builder.packSecondaryWeapon(false);
        this._builder.packMeleeWeapon();
        this._builder.packThrowableWeapon(false);
        this._builder.packHelmet(false);
        this._builder.packArmor(false);
        return this._builder.getKit();
    }

    provideForSpecialForce(): Kit {
        this._builder.packPrimaryWeapon();
        this._builder.packSecondaryWeapon(true);
        this._builder.packMeleeWeapon();
        this._builder.packThrowableWeapon(false);
        this._builder.packHelmet(true);
        this._builder.packArmor(true);
        return this._builder.getKit();
    }

    provideForFrontlineSoldier(): Kit {
        this._builder.packPrimaryWeapon();
        this._builder.packSecondaryWeapon(false);
        this._builder.packMeleeWeapon();
        this._builder.packThrowableWeapon(true);
        this._builder.packHelmet(false);
        this._builder.packArmor(true);
        return this._builder.getKit();
    }
}