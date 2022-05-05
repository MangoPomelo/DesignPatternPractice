import { Sniper } from "./implementation/Element";
import { AmmoTruck } from "./implementation/Visitor";


export function main(): void {
    const truck = new AmmoTruck(100);
    const sniper = new Sniper();
    sniper.accept(truck);
}