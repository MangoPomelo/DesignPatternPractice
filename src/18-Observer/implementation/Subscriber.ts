export interface Subscriber {
    update(newLocation: string): void; 
}

export class Agent implements Subscriber {
    private _codeName: string;
    private _location: string;
    constructor(codeName: string, initLocation: string) {
        this._codeName = codeName;
        this._location = initLocation;
    }
    update(newLocation: string): void {
        this.moveTo(newLocation);
    }
    moveTo(newLocation: string): void {
        this._location = newLocation;
    }
    reportStatus(): void {
        console.log(`Agent ${this._codeName} is at ${this._location}`);
    }
}