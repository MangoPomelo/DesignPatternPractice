import { Bullet } from "./Bullet";


export class Gun {
    private _bullet: Bullet;
    constructor(initBullet: Bullet) {
        this._bullet = initBullet;
    }
    reload(bullet: Bullet): void {
        this._bullet = bullet;
    }
    shoot(): void {
        this._bullet.trigger();
    }
}