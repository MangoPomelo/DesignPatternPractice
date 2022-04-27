export interface Tank {
    fire(): void;
    countermeasure(): void;
    getName(): string;
}

export class ConcreteTank implements Tank {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }
    fire(): void {
        console.log(`${this._name}: Fire!!!`);
    }
    countermeasure(): void {
        console.log(`${this._name}: Plain armor!`);
    }
    getName(): string {
        return this._name;
    }
}