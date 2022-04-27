export interface Prototype {
    clone(): Prototype;
}

export class DigistructableGun implements Prototype {
    private _ammo: number;
    private _magSize: number;
    private _damage: number;
    constructor(magSize: number, damage: number);
    constructor(anotherDigistructableGun: DigistructableGun);
    constructor(...args: any[]) {
        // this is why typescript is ugly :(
        if ((args[0] !== undefined && typeof args[0] === 'number') && (args[1] !== undefined && typeof args[1] === 'number')) {
            this._magSize = args[0];
            this._damage = args[1];
            this._ammo = this._magSize;
        } else if (args[0] !== undefined && args[0] instanceof DigistructableGun) {
            this._magSize = args[0]._magSize;
            this._damage = args[0]._damage;
            this._ammo = args[0]._ammo;
        } else {
            throw new Error('Invalid arguments');
        }
    }

    clone(): DigistructableGun {
        console.log('⚙️: DigistructableGun digitally cloned!');
        return new DigistructableGun(this);
    }

    shoot(): void {
        if (this._ammo > 0) {
            console.log(`🔫: Pa with ${this._damage} damage!`);
            this._ammo -= 1;
        } else {
            console.log('◻️: Ammo running out!');
        }
    }

    reload(): void {
        this._ammo = this._magSize;
        console.log('⏱️: Reloading!');
    }
}

export class TedioreGun extends DigistructableGun implements Prototype{
    private _explosiveDamage: number;
    constructor(magSize: number, damage: number, explosiveDamage: number);
    constructor(anotherTedioreGun: TedioreGun);
    constructor(...args: any) {
        if ((args[0] !== undefined && typeof args[0] === 'number') && (args[1] !== undefined && typeof args[1] === 'number') && (args[2] !== undefined && typeof args[2] === 'number')) {
            super(args[0], args[1]);
            this._explosiveDamage = args[2];
        } else if (args[0] !== undefined && args[0] instanceof TedioreGun) {
            super(args[0]);
            this._explosiveDamage = args[0]._explosiveDamage;
        } else {
            throw new Error('Invalid arguments');
        }
    }

    launchGrenade(): void {
        console.log(`🧨: Kaboom with ${this._explosiveDamage} damage!`);
    }

    clone(): TedioreGun {
        console.log('⚙️: TedioreGun digitally cloned!');
        return new TedioreGun(this);
    }
}

export class FireBall extends DigistructableGun implements Prototype {
    constructor(damage: number);
    constructor(anotherFireBall: FireBall);
    constructor(...args: any) {
        if (args[0] !== undefined && typeof args[0] === 'number') {
            super(1, args[0]);
        } else if (args[0] !== undefined && args[0] instanceof FireBall) {
            super(args[0]);
        } else {
            throw new Error('Invalid arguments');
        }
    }

    shoot(): void {
        console.log('🔥: Infinite Fire ball!');
    }

    clone(): DigistructableGun {
        console.log('⚙️: FireBall magically cloned!');
        return new FireBall(this);
    }
}