export interface IMachineGun {
    fullAutoShoot(): void;
}

export class M60E4 implements IMachineGun {
    fullAutoShoot(): void {
        console.log('M60E4: 🦅 American fuck ya! Da-da-da...');
    }
}

export class MG3 implements IMachineGun {
    fullAutoShoot(): void {
        console.log('MG3: 🍺 Made in Germany! Brr...');
    }
}

export class PKP implements IMachineGun {
    fullAutoShoot(): void {
        console.log('PKP: 🪆 When russia come to you! Ta-ta-ta...');
    }
}