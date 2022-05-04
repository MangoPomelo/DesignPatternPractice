import { State, OnAndUnloaded } from './State'; 


export class Gun {
    private _state: State;
    private _ammo: number;
    private _magSize: number;
    constructor(magSize: number) {
        this._magSize = magSize;
        this._ammo = 0;
        this._state = new OnAndUnloaded(this);
    }
    setAmmo(ammo: number): void { this._ammo = ammo; }
    getAmmo(): number { return this._ammo; }
    getMagSize(): number { return this._magSize; }
    setState(s: State): void{ this._state = s; }
    getState(): State { return this._state; }

    safetyOn(): void { this._state.safetyOn(); }
    safetyOff(): void { this._state.safetyOff(); }
    load(): void { this._state.load(); }
    unloaded(): void { this._state.unloaded(); }
    shoot(): void { this._state.shoot(); }
}