import { Subscriber } from './Subscriber';


export abstract class Publisher {
    private _subscribers: Subscriber[];
    constructor() {
        this._subscribers = [];
    }
    attach(s: Subscriber): void {
        this._subscribers.push(s);
    }
    detach(s: Subscriber): void {
        const index = this._subscribers.findIndex(sub => sub === s);
        if (index === -1) {
            return;
        }
        this._subscribers.splice(index, 1);
    }
    notify(newLoc: string): void {
        for (let s of this._subscribers) {
            s.update(newLoc);
        }
    }
    getSubscribers(): Subscriber[] {
        return this._subscribers;
    }
}

export class MI6 extends Publisher {
    private _identifier: string;
    constructor(identifier: string) {
        super();
        this._identifier = identifier;
    }
    reportStatus() {
        console.log(`MI6 is reporting with password: ${this._identifier.toUpperCase()}`);
    }
}

export class CIA extends Publisher {
    private _identifier: string;
    constructor(identifier: string) {
        super();
        this._identifier = identifier;
    }
    reportStatus() {
        console.log(`CIA is reporting with password: ${this._identifier.toLocaleUpperCase()}`);
    }
}