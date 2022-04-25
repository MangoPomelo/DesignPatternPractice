import { Soldier, Troop } from "./implementation/Unit";


export function main(): void {
    const wolfpack = new Troop('afo team wolfpack');
    wolfpack.add(new Soldier('Panther'));
    wolfpack.add(new Soldier('Vegas'));
    wolfpack.add(new Soldier('Dusty'));
    wolfpack.add(new Soldier('Deuce'));

    const neptune = new Troop('afo team neptune');
    neptune.add(new Soldier('Mother'));
    neptune.add(new Soldier('Preacher'));
    neptune.add(new Soldier('Voodoo'));
    neptune.add(new Soldier('Rabbit'));

    const afo = new Troop('advanced force operation teams');
    afo.add(wolfpack);
    afo.add(neptune);

    afo.commence('rescue attempt');
}