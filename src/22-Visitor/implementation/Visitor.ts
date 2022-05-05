import { MortarTeam, Sniper } from "./Element";

export interface Visitor {
    feedMortalShell(e: MortarTeam): void;
    feedHighCaliberAmmo(e: Sniper): void;
}

export class AmmoTruck implements Visitor {
    private _storage: number;
    constructor(storage: number) {
        this._storage = storage;
    }
    feedMortalShell(e: MortarTeam): void {
        if (this._storage <= 0) {
            return;
        }

        const shells = e.getShells();
        e.setShells(shells + 1);

        this._storage -= 1;

        console.log('The mortar team has been supplied');
    }
    feedHighCaliberAmmo(e: Sniper): void {
        if (this._storage <= 0) {
            return;
        }

        const ammo = e.getAmmo();
        e.setAmmo(ammo + 1);

        this._storage -= 1;

        console.log('The sniper has been supplied');
    }
}