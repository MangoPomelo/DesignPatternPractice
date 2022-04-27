export interface AirSupport {
    attack(alphabetic: string, numerical: number): void;
}

export class Squadron implements AirSupport {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }
    attack(alphabetic: string, numerical: number): void {
        const combinedCoordinate = alphabetic.toLocaleUpperCase() + numerical;
        console.log(`⚔️ Air Forces ${this._name} is bombing ${combinedCoordinate}`);
    }
}

export class TACP {
    private _connection: Squadron;
    private _name: string;
    constructor(name: string, connection: Squadron) {
        this._name = name;
        this._connection = connection;
    }
    attack(alphabetic: string, numerical: number): void {
        console.log(`📻 TACP ${this._name} is calling in an air strike...`);
        this._connection.attack(alphabetic, numerical);
    }
}