import { Mediator } from './Mediator';


export class Squad {
    private _radio: Mediator | null;
    private _name: string;
    private _location: string;
    constructor(squadName: string, initLocation: string) {
        this._name = squadName;
        this._location = initLocation;
        this._radio = null;
    }
    setRadio(r: Mediator) {
        this._radio = r;
    }
    request(type: string) {
        if (this._radio !== null) {
            this._radio.handleRequest(this, type);
        }
    }
    getCurrentLocation() {
        return this._location;
    }
    moveTo(newLoc: string) {
        console.log(`Squad ${this._name} is moving to location ${this._location}`);
        this._location = newLoc;
    }
}