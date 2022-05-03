import { Squad } from './Squad';


export interface Mediator {
    handleRequest(sender: Squad, type: string): void;
}

export class Commander implements Mediator {
    private _reconSquad: Squad;
    private _assaultSquad: Squad;
    private _supportSquad: Squad;
    constructor(recon: Squad, assault: Squad, support: Squad) {
        this._reconSquad = recon;
        this._assaultSquad = assault;
        this._supportSquad = support;
    }
    handleRequest(sender: Squad, type: string) {
        if (type === '<recon>') {
            const senderLocation = sender.getCurrentLocation();
            this._reconSquad.moveTo(senderLocation);
        } else if (type === '<assault>') {
            const senderLocation = sender.getCurrentLocation();
            this._assaultSquad.moveTo(senderLocation);
        } else {
            const senderLocation = sender.getCurrentLocation();
            this._supportSquad.moveTo(senderLocation);
        }
    }
}