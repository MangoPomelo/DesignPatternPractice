import { CombatMap } from "./CombatMap";


export interface Iterator {
    getNext(): string;
    hasMore(): boolean;
}

export class AttackingIterator implements Iterator {
    private _map: CombatMap;
    private _capturedFlags: string[];
    private _capturingFlags: string[];
    constructor(combatMap: CombatMap) {
        this._map = combatMap;
        this._capturedFlags = [this._map.getAttackerBase()];
        this._capturingFlags = [this._map.getAttackerBase()];
    }
    getNext(): string {
        if (!this.hasMore()) {
            return '<done>';
        }

        const shifted = this._capturingFlags.shift();
        const toReturn = shifted as string;

        const neighborFlags = this._map.getNeighborFlags(toReturn);
        const newFlags = neighborFlags.filter(f => !this._capturedFlags.includes(f));

        this._capturedFlags = this._capturedFlags.concat(newFlags);
        this._capturingFlags = this._capturingFlags.concat(newFlags);

        return toReturn;
    }
    hasMore(): boolean {
        return this._capturingFlags.length > 0;
    }
}


export class DefendingIterator implements Iterator {
    private _map: CombatMap;
    private _capturedFlags: string[];
    private _capturingFlags: string[];
    constructor(combatMap: CombatMap) {
        this._map = combatMap;
        this._capturedFlags = [this._map.getDefenderBase()];
        this._capturingFlags = [this._map.getDefenderBase()];
    }
    getNext(): string {
        if (!this.hasMore()) {
            return '<done>';
        }

        const shifted = this._capturingFlags.shift();
        const toReturn = shifted as string;

        const neighborFlags = this._map.getNeighborFlags(toReturn);
        const newFlags = neighborFlags.filter(f => !this._capturedFlags.includes(f));

        this._capturedFlags = this._capturedFlags.concat(newFlags);
        this._capturingFlags = this._capturingFlags.concat(newFlags);

        return toReturn;
    }
    hasMore(): boolean {
        return this._capturingFlags.length > 0;
    }
}