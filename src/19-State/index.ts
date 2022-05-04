import { Gun } from "./implementation/Gun";

export function main(): void {
    const gun = new Gun(6);

    gun.safetyOff();
    gun.load();
    for (let i = 0; i < 6; i++) {
        gun.shoot();
    }
    gun.shoot();

    console.log('----------------------------------------------------------------');

    gun.load();
    for (let i = 0; i < 6; i++) {
        gun.shoot();
    }
    gun.shoot();
}