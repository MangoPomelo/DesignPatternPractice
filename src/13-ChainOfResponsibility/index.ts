import { ActiveProtection, IRSmoke, ReactiveArmor, Smokescreen } from './implementation/Countermeasure';
import { Missile } from './implementation/Missile';


export function main(): void {
    const missile = new Missile(100);

    const ss = new Smokescreen();
    const ir = new IRSmoke();
    const ap = new ActiveProtection();
    const ra = new ReactiveArmor();

    ss.setNextCountermeasure(ir);
    ir.setNextCountermeasure(ap);
    ap.setNextCountermeasure(ra);

    ss.counteract(missile);
}