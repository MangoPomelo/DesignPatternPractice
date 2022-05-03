export abstract class Structure {
    private _state: number;
    constructor(initState: number) {
        this._state = initState;
    }
    damage(value: number): void {
        this._state = Math.max(this._state - value, 0);
    }
    isDestroyed(): boolean {
        return this._state <= 0;
    }
    abstract onDestroy(): void;
}

export class Gate extends Structure {
    private _structureName: string;
    constructor(name: string, initState: number) {
        super(initState);
        this._structureName = name;
    }
    onDestroy(): void {
        console.log(`${this._structureName} is destroyed!`);
    }
}

export class Wall extends Structure {
    private _structureName: string;
    constructor(name: string, initState: number) {
        super(initState);
        this._structureName = name;
    }
    onDestroy(): void {
        console.log(`${this._structureName} is destroyed!`);
    }
}