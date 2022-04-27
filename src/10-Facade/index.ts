import { HQ } from './implementation/HQ';
import { CombatUnit } from './implementation/CombatUnit';


export function main(): void {
    const hq = new HQ();
    const assaultForce = new CombatUnit('Ranger');
    const specialForce = new CombatUnit('Delta');
    const airForce = new CombatUnit('Warthog');
    const armoredForce = new CombatUnit('Stryker');
    hq.recruitAssaultForce(assaultForce);
    hq.recruitSpecialForce(specialForce);
    hq.recruitAirForce(airForce);
    hq.recruitArmoredForce(armoredForce);
    hq.capture('A', 16);
};