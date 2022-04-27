import { IMachineGun, M60E4, MG3, PKP } from './MachineGun';
import { IPistol, M1911A1, Makarov, USP45 } from './Pistol';
import { AK47, G36A2, IRifle, M16A4 } from './Rifle';


export interface AbstractFactory {
    createRifle(): IRifle;
    createMachineGun(): IMachineGun;
    createPistol(): IPistol;
};

export class AmericanFactory implements AbstractFactory {
    createRifle(): IRifle {
        return new M16A4();
    }
    createMachineGun(): IMachineGun {
        return new M60E4();
    }
    createPistol(): IPistol {
        return new M1911A1();
    }
}

export class GermanFactory implements AbstractFactory {
    createRifle(): IRifle {
        return new G36A2();
    }
    createMachineGun(): IMachineGun {
        return new MG3();
    }
    createPistol(): IPistol {
        return new USP45();
    }
}

export class RussianFactory implements AbstractFactory {
    createRifle(): IRifle {
        return new AK47();
    }
    createMachineGun(): IMachineGun {
        return new PKP();
    }
    createPistol(): IPistol {
        return new Makarov();
    }
}