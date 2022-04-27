import { ExplosiveM79, FlareM79, SmokeM79 } from "./implementation/M79";


export function main(): void {
    // Shoot a smoke M79
    const smokeM79 = new SmokeM79();
    smokeM79.launch();

    // Shoot a flare M79
    const flareM79 = new FlareM79();
    flareM79.launch();

    // Shoot an explosive M79
    const explosiveM79 = new ExplosiveM79();
    explosiveM79.launch();
};