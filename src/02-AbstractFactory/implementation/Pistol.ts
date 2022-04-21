export interface IPistol {
    semiAutoShoot(): void;
}

export class M1911A1 implements IPistol {
    semiAutoShoot(): void {
        console.log('M1911A1: 🦅 Da!');
    }
}

export class USP45 implements IPistol {
    semiAutoShoot(): void {
        console.log('USP45: 🍺 Ba!');
    }
}

export class Makarov implements IPistol {
    semiAutoShoot(): void {
        console.log('Makarov: 🪆 Ta!');
    }
}