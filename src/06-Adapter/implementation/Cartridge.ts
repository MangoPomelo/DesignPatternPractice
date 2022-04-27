export interface HighCaliber {
    fireHighCaliber(): void;
}

export class Cartridge762 implements HighCaliber {
    private _damage: number;
    constructor(damage: number) {
        this._damage = damage;
    }

    fireHighCaliber(): void {
        console.log(`⁍ 7.62: DMG=${this._damage}`);
    }
}

export class Adapter implements HighCaliber {
    private _adaptee: Cartridge556;
    constructor(adaptee: Cartridge556) {
        this._adaptee = adaptee;
    }

    fireHighCaliber(): void {
        this._adaptee.fireLowCaliber();
    }
}

export class Cartridge556 {
    private _damage: number;
    constructor(damage: number) {
        this._damage = damage;
    }

    fireLowCaliber(): void {
        console.log(`⁍ 5.56: DMG=${this._damage}`);
    }
}