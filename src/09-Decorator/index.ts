import { ActiveProtectionDecorator, IRSmokeDecorator, ReactiveArmorDecorator } from './implementation/Decorator';
import { ConcreteTank } from './implementation/Tank';


export function main(): void {
    const abrams = new ConcreteTank('M1 Abrams');
    const activeProtectedAbrams = new ActiveProtectionDecorator(abrams);
    const irSmoked = new IRSmokeDecorator(activeProtectedAbrams);
    const reactiveArmored = new ReactiveArmorDecorator(irSmoked);
    reactiveArmored.fire();
    reactiveArmored.countermeasure();
};