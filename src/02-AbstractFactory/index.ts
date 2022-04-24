import { Soldier } from './implementation/Soldier';
import { AmericanFactory, GermanFactory, RussianFactory } from './implementation/Factory';


export function main(): void {
    // Comes a soldier with american weapons
    (new Soldier(new AmericanFactory())).killEmAll();

    // Comes a soldier with german made
    (new Soldier(new GermanFactory())).killEmAll();
    
    // Comes a russian soldier
    (new Soldier(new RussianFactory())).killEmAll();
};