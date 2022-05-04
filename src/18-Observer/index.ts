import { CIA } from './implementation/Publisher';
import { Agent } from './implementation/Subscriber';


export function main(): void {
    const cia = new CIA('popcorn');
    cia.reportStatus();

    const blackSheep = new Agent('BlackSheep', 'Seoul');
    const mother = new Agent('Mother', 'Shanghai');
    const swan = new Agent('Swan', 'Moscow');
    cia.attach(blackSheep);
    cia.attach(mother);
    cia.attach(swan);
    cia.notify('Taipei');

    blackSheep.reportStatus();
    mother.reportStatus();
    swan.reportStatus();
}