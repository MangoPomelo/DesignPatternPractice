import { Trebuchet } from './implementation/SiegeEngine';
import { FirePot, Stone } from './implementation/Missile';
import { Wall } from './implementation/Structure';

export function main(): void {
    const trebuchet = new Trebuchet(200);
    const target = new Wall('the Fire Wall', 500);
    const firePot = new FirePot(target, 25, 150);
    const stone = new Stone(target, 100, 0);

    trebuchet.load(firePot);
    trebuchet.loose();

    trebuchet.load(stone);
    trebuchet.loose();
}