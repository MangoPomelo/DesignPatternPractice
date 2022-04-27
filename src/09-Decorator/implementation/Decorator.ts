import { Tank } from './Tank';


export class TankDecorator implements Tank {
    private _wrappee: Tank;
    constructor(t: Tank) {
        this._wrappee = t;
    }
    fire(): void {
        this._wrappee.fire();
    }
    countermeasure(): void {
        this._wrappee.countermeasure();
    }
    getName(): string {
        return this._wrappee.getName();
    }
}

export class ReactiveArmorDecorator extends TankDecorator {
    constructor(t: Tank) {
        super(t);
    }
    countermeasure(): void {
        console.log(`${super.getName()}: Reactive Armor activated!`);
        super.countermeasure();
    }
}

export class IRSmokeDecorator extends TankDecorator {
    constructor(t: Tank) {
        super(t);
    }
    countermeasure(): void {
        console.log(`${super.getName()}: IR Smoke is launched!`);
        super.countermeasure();
    }
}

export class ActiveProtectionDecorator extends TankDecorator {
    constructor(t: Tank) {
        super(t);
    }
    countermeasure(): void {
        console.log(`${super.getName()}: Active Protection is equipped!`);
        super.countermeasure();
    }
}