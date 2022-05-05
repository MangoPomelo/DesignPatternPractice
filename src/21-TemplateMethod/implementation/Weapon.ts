export abstract class Weapon {
    private _isLoaded: boolean;
    constructor() {
        this._isLoaded = false;
    }
    abstract check(): boolean;
    abstract shoot(): void;
    load(): void {
        this._isLoaded = true;
    }
    unload(): void {
        this._isLoaded = false;
    }
    templateMethod(): void {
        this.load();
        if(this.check() && this._isLoaded) {
            this.shoot();
            this.unload();
        }
    }
}

export class Mortar extends Weapon {
    load(): void {
        super.load();
        console.log('Loading mortar shell!');
    }
    check(): boolean {
        console.log('Mortar ready to fire!');
        return true;
    }
    shoot(): void {
        console.log('Fire a round!');
    }
}

export class Musket extends Weapon {
    load(): void {
        super.load();
        console.log('Gunpowder loaded!');
        console.log('Musket ball loaded!');
    }
    check(): boolean {
        console.log('Musket ready to fire!');
        return true;
    }
    shoot(): void {
        console.log('Fire a lead ball!');
    }
    unload(): void {
        super.unload();
        console.log('Cleaning the barrel!');
    }
}