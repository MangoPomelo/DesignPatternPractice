import { Squad } from './implementation/Squad';
import { Commander } from './implementation/Mediator';


export function main(): void {
    const recon = new Squad('Ghosts', 'Bravo');
    const assault = new Squad('Neptune', 'Lima');
    const support = new Squad('Ranger', 'Alpha');
    const hq = new Commander(recon, assault, support);

    recon.setRadio(hq);
    assault.setRadio(hq);
    support.setRadio(hq);

    assault.request('<recon>');
    assault.request('<support>');
}