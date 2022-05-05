export interface Bullet {
    trigger(): void;
}

export class FullMetalJacket implements Bullet {
    private _damage: number;
    constructor(damage: number) {
        this._damage = damage;
    }
    trigger(): void {
        console.log(`FMJ was fired with ${this._damage} damage!`);
    }
}

export class JacketedHollowPoint implements Bullet {
    private _damage: number;
    constructor(damage: number) {
        this._damage = damage;
    }
    trigger(): void {
        console.log(`JHP was fired with ${this._damage} damage!`);
    }
}

export class JacketedSoftPoint implements Bullet {
    private _damage: number;
    constructor(damage: number) {
        this._damage = damage;
    }
    trigger(): void {
        console.log(`JSP was fired with ${this._damage} damage!`);
    }
}