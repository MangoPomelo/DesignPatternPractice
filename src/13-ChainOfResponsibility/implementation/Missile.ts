export class Missile {
    private _state: number;
    constructor(value: number) {
        this._state = value;
    }
    worsen(value: number): void {
        this._state = Math.max(this._state - value, 0);
    }
    isDisarmed(): boolean {
        return this._state <= 0;
    }
}