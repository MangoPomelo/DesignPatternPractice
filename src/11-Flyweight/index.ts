import { PlayerFactory } from "./implementation/PlayerFactory";


export function main(): void {
    const weapon1 = 'M4A1';
    const weapon2 = 'AUG';
    const weapon3 = 'UMP45';
    const hp = 100;
    const task = 'diffuse the bomb';
    const texture1 = 'SAS';
    const texture2 = 'SEAL';

    const ct1 = PlayerFactory.createCounterTerrorist(weapon1, hp, task, texture1);
    const ct2 = PlayerFactory.createCounterTerrorist(weapon2, hp, task, texture2);
    const ct3 = PlayerFactory.createCounterTerrorist(weapon3, hp, task, texture2);

    ct1.displayMission();
    ct2.displayMission();
    ct3.displayMission();
}