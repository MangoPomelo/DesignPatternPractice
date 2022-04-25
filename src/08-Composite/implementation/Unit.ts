export interface Unit {
    commence(operationName: string): void;
}

export class Soldier implements Unit {
    private _soldierName: string;
    constructor(name: string) {
        this._soldierName = name;
    }

    commence(operationName: string): void {
        const capitalizedOperationName = operationName[0].toUpperCase() + operationName.slice(1).toLocaleLowerCase();
        console.log(`  ${this._soldierName} is commencing Operation ${capitalizedOperationName}`);
    }
}

export class Troop implements Unit {
    private _troopName: string;
    private _units: Unit[];
    constructor(name: string) {
        this._troopName = name;
        this._units = [];
    }
    add(unit: Unit): void {
        this._units = [...this._units, unit];
    }
    remove(unit: Unit): void {
        this._units = this._units.filter(u => u !== unit);
    }
    getUnits(): Unit[] {
        return this._units;
    }

    commence(operationName: string): void {
        console.log(`${this._troopName.toUpperCase()}:`);
        for (let unit of this._units) {
            unit.commence(operationName);
        }
    }
}