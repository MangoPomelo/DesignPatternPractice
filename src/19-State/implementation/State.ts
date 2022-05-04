import { Gun } from "./Gun";


export interface State {
    safetyOn(): void;
    safetyOff(): void;
    load(): void;
    unloaded(): void;
    shoot(): void;
}

export class OnAndUnloaded implements State {
    private _context: Gun;
    constructor(context: Gun) {
        this._context = context;
    }
    safetyOn(): void {
        // pass
    }
    safetyOff(): void {
        const context = this._context;
        const newState = new OffAndUnloaded(context);
        context.setState(newState);
    }
    load(): void {
        const context = this._context;
        context.setAmmo(context.getMagSize());

        const newState = new OnAndLoaded(context);
        context.setState(newState);
    }
    unloaded(): void {
        // pass
    }
    shoot(): void {
        // pass
    }
    getStateName() { 
        return 'Safety on & unloaded';
    }
}

export class OffAndUnloaded implements State {
    private _context: Gun;
    constructor(context: Gun) {
        this._context = context;
    }
    safetyOn(): void {
        const context = this._context;
        const newState = new OnAndUnloaded(context);
        context.setState(newState);
    }
    safetyOff(): void {
        // pass
    }
    load(): void {
        const context = this._context;
        context.setAmmo(context.getMagSize());

        const newState = new OffAndLoaded(context);
        context.setState(newState);
    }
    unloaded(): void {
        // pass
    }
    shoot(): void {
        // pass
    }
    getStateName() { 
        return 'Safety off & unloaded';
    }
}

export class OnAndLoaded implements State {
    private _context: Gun;
    constructor(context: Gun) {
        this._context = context;
    }
    safetyOn(): void {
        // pass
    }
    safetyOff(): void {
        const context = this._context;
        const newState = new OffAndLoaded(context);
        context.setState(newState);
    }
    load(): void {
        // pass
    }
    unloaded(): void {
        const context = this._context;
        const newState = new OnAndUnloaded(context);
        context.setState(newState);
    }
    shoot(): void {
        // pass
    }
    getStateName() { 
        return 'Safety on & loaded';
    }
}

export class OffAndLoaded implements State {
    private _context: Gun;
    constructor(context: Gun) {
        this._context = context;
    }
    safetyOn(): void {
        const context = this._context;
        const newState = new OnAndLoaded(context);
        context.setState(newState);
    }
    safetyOff(): void {
        // pass
    }
    load(): void {
        // pass
    }
    unloaded(): void {
        const context = this._context;
        const newState = new OffAndUnloaded(context);
        context.setState(newState);
    }
    shoot(): void {
        const context = this._context;
        const ammo = context.getAmmo();
        if (ammo <= 0) {
            console.log('Ding! (No Ammo)');
            const newState = new OffAndUnloaded(context);
            context.setState(newState);
        } else {
            console.log('Da!');
            context.setAmmo(ammo - 1);
        }
    }
    getStateName() { 
        return 'Safety off & loaded';
    }
}