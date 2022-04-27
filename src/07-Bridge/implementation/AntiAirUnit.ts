export interface AntiAirUnit {
    isEnabled(): boolean;
    setPowerState(state: boolean): void;
    setRadarState(state: boolean): void;
    setWeaponState(state: boolean): void;
    fire(): void;
}

export class Tunguska implements AntiAirUnit {
    private _damage: number;
    private _engineState: boolean;
    private _radarState: boolean;
    private _weaponState: boolean;
    constructor(damage: number) {
        this._damage = damage;
        this._engineState = false;
        this._radarState = false;
        this._weaponState = false;
    }
    isEnabled(): boolean {
        const globalState = this._engineState && this._radarState && this._weaponState;
        if (globalState === true) {
            console.log('All systems enabled');
        }
        return globalState;
    }
    setPowerState(state: boolean): void {
        this._engineState = state;
    }
    setRadarState(state: boolean): void {
        this._radarState = state;
    }
    setWeaponState(state: boolean): void {
        this._weaponState = state;
    }
    fire(): void {
        if (this.isEnabled()) {
            console.log(`2K22 Tunguska firing: DMG=${this._damage}`);
        }
    }
}

export class SergeantYork implements AntiAirUnit {
    private _damage: number;
    private _engineState: boolean;
    private _radarState: boolean;
    private _weaponState: boolean;
    constructor(damage: number) {
        this._damage = damage;
        this._engineState = false;
        this._radarState = false;
        this._weaponState = false;
    }
    isEnabled(): boolean {
        const globalState = this._engineState && this._radarState && this._weaponState;
        if (globalState === true) {
            console.log('All systems enabled');
        }
        return globalState;
    }
    setPowerState(state: boolean): void {
        this._engineState = state;
    }
    setRadarState(state: boolean): void {
        this._radarState = state;
    }
    setWeaponState(state: boolean): void {
        this._weaponState = state;
    }
    fire(): void {
        if (this.isEnabled()) {
            console.log(`M247 Sergeant York firing: DMG=${this._damage}`);
        }
    }
}