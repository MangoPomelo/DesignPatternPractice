export class PlayerFlyweight {
    private _task: string;
    private _texture: string;
    constructor(task: string, texture: string) {
        this._task = task;
        this._texture = texture;
    }

    getTexture(): string {
        return this._texture;
    }
    getTask(): string {
        return this._task;
    }
}

export interface Player {
    assignWeapon(weapon: string): void;
    setHP(hp: number): void;
    displayMission(): void;
}

export class Terrorist implements Player {
    private _weapon: string;
    private _healthPoint: number;
    private _flyweight: PlayerFlyweight;
    constructor(weapon: string, hp: number, pf: PlayerFlyweight) {
        this._weapon = weapon;
        this._healthPoint = hp;
        this._flyweight = pf;
    }
    assignWeapon(weapon: string): void {
        this._weapon = weapon;
    }
    setHP(hp: number): void {
        this._healthPoint = hp;
    }
    displayMission(): void {
        const texture = this._flyweight.getTexture();
        const task = this._flyweight.getTask();
        console.log(`👤 Terrorist(${texture}) with weapon ${this._weapon} | HP: ${this._healthPoint} | Task: ${task}`);
    }
}

export class CounterTerrorist implements Player {
    private _weapon: string;
    private _healthPoint: number;
    private _flyweight: PlayerFlyweight;
    constructor(weapon: string, hp: number, pf: PlayerFlyweight) {
        this._weapon = weapon;
        this._healthPoint = hp;
        this._flyweight = pf;
    }
    assignWeapon(weapon: string): void {
        this._weapon = weapon;
    }
    setHP(hp: number): void {
        this._healthPoint = hp;
    }
    displayMission(): void {
        const texture = this._flyweight.getTexture();
        const task = this._flyweight.getTask();
        console.log(`👮 CounterTerrorist(${texture}) with weapon ${this._weapon} | HP: ${this._healthPoint} | Task: ${task}`);
    }
}
