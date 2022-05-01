import { Missile } from "./Missile";


export interface Countermeasure {
    setNextCountermeasure(countermeasure: Countermeasure | null): void;
    counteract(threat: Missile): void;
}

export abstract class BaseCountermeasure implements Countermeasure {
    private _nextCountermeasure: Countermeasure | null;
    constructor() {
        this._nextCountermeasure = null;
    }
    setNextCountermeasure(countermeasure: Countermeasure | null): void {
        this._nextCountermeasure = countermeasure;
    }
    counteract(threat: Missile): void {
        if (this._nextCountermeasure !== null) {
            this._nextCountermeasure.counteract(threat);
        }
    }
}

export class Smokescreen extends BaseCountermeasure {
    counteract(threat: Missile): void {
        threat.worsen(10);
        if (threat.isDisarmed()) {
            console.log('​⭕​ Smokescreen disarmed the missile!');
        } else {
            console.log('​❌​ Smokescreen cannot disarm the missile!');
            super.counteract(threat);
        }
    }
}

export class IRSmoke extends BaseCountermeasure {
    counteract(threat: Missile): void {
        threat.worsen(30);
        if (threat.isDisarmed()) {
            console.log('​⭕​ IRSmoke disarmed the missile!');
        } else {
            console.log('​❌​ IRSmoke cannot disarm the missile!');
            super.counteract(threat);
        }
    }
}

export class ActiveProtection extends BaseCountermeasure {
    counteract(threat: Missile): void {
        threat.worsen(90);
        if (threat.isDisarmed()) {
            console.log('​⭕​ ActiveProtection disarmed the missile!');
        } else {
            console.log('​❌​ ActiveProtection cannot disarm the missile!');
            super.counteract(threat);
        }
    }
}

export class ReactiveArmor extends BaseCountermeasure {
    counteract(threat: Missile): void {
        threat.worsen(70);
        if (threat.isDisarmed()) {
            console.log('​⭕​ ReactiveArmor disarmed the missile!');
        } else {
            console.log('​❌​ ReactiveArmor cannot disarm the missile!');
            super.counteract(threat);
        }
    }
}