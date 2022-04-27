export interface IGrenade {
    detonate(): void
}

export class SmokeGrenade implements IGrenade {
    detonate(): void {
        console.log('SmokeGrenade: ☁️');
    }
}

export class FlareGrenade implements IGrenade {
    detonate(): void {
        console.log('FlareGrenade: 🌟');
    }
}

export class ExplosiveGrenade implements IGrenade {
    detonate(): void {
        console.log('ExplosiveGrenade: 💥');
    }
}