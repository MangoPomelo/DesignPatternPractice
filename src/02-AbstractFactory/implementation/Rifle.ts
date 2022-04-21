export interface IRifle {
    semiAutoShoot(): void;
    fullAutoShoot(): void;
}

export class M16A4 implements IRifle {
    semiAutoShoot(): void {
        console.log('M16A4: 🦅 Da!');
    }
    fullAutoShoot(): void {
        console.log('M16A4: 🦅 American fuck ya! Da-da-da...');
    }
}

export class G36A2 implements IRifle {
    semiAutoShoot(): void {
        console.log('G36A2: 🍺 Ba!');
    }
    fullAutoShoot(): void {
        console.log('G36A2: 🍺 Made in Germany! Brr...');
    }
}

export class AK47 implements IRifle {
    semiAutoShoot(): void {
        console.log('AK47: 🪆 Ta!');
    }
    fullAutoShoot(): void {
        console.log('AK47: 🪆 When russia come to you! Ta-ta-ta...');
    }
}