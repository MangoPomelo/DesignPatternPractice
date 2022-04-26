export class CombatUnit {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }
    
    assault(alphabeticCoordinate: string, numericalCoordinate: number): void {
        const combinedCoordinate = alphabeticCoordinate.toLocaleUpperCase() + numericalCoordinate;
        console.log(`⚔️ Team ${this._name} is assaulting ${combinedCoordinate}`);
    }
    defend(alphabeticCoordinate: string, numericalCoordinate: number): void {
        const combinedCoordinate = alphabeticCoordinate.toLocaleUpperCase() + numericalCoordinate;
        console.log(`🛡️ Team ${this._name} is defending ${combinedCoordinate}`);
    }
    reconnoiter(alphabeticCoordinate: string, numericalCoordinate: number): void {
        const combinedCoordinate = alphabeticCoordinate.toLocaleUpperCase() + numericalCoordinate;
        console.log(`🔭 Team ${this._name} is reconnoitering ${combinedCoordinate}`);
    }
}