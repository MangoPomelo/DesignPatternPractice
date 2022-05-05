import { Visitor } from "./Visitor";


export interface Element {
    accept(visitor: Visitor): void;
}

export class MortarTeam implements Element {
    private _shells: number;
    constructor() {
        this._shells = 0;
    }
    accept(visitor: Visitor): void {
        visitor.feedMortalShell(this);
    }
    getShells(): number {
        return this._shells;
    }
    setShells(value: number): void {
        this._shells = value;
    }
}

export class Sniper implements Element {
    private _ammo: number;
    constructor() {
        this._ammo = 0;
    }
    accept(visitor: Visitor): void {
        visitor.feedHighCaliberAmmo(this);
    }
    getAmmo(): number {
        return this._ammo;
    }
    setAmmo(value: number): void {
        this._ammo = value;
    }
}