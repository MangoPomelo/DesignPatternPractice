import { TedioreGun } from "./implementation/Prototype";


export function main(): void {
    const prototypeElephantGunWithANukeGrenadeLauncher = new TedioreGun(1, 999, 9999);
    const cloned = prototypeElephantGunWithANukeGrenadeLauncher.clone();
    cloned.shoot();
    cloned.shoot();
    cloned.reload();
    cloned.shoot();
    cloned.launchGrenade();
};