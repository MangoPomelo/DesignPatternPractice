import { CounterTerrorist, PlayerFlyweight, Terrorist } from './Player';


export class PlayerFactory {
    private static _playerFlyweights: PlayerFlyweight[] = [];
    static createTerrorist(weapon: string, hp: number, task: string, texture: string): Terrorist {
        const fw = PlayerFactory._findFlyweight(task, texture);
        return new Terrorist(weapon, hp, fw);
    }
    static createCounterTerrorist(weapon: string, hp: number, task: string, texture: string): CounterTerrorist {
        const fw = PlayerFactory._findFlyweight(task, texture);
        return new CounterTerrorist(weapon, hp, fw);
    }
    private static _findFlyweight(task: string, texture: string): PlayerFlyweight {
        let found = PlayerFactory._playerFlyweights.find(fw => fw.getTask() === task && fw.getTexture() === texture);
        if (found === undefined) {
            found = new PlayerFlyweight(task, texture);
            PlayerFactory._playerFlyweights = [...PlayerFactory._playerFlyweights, found];
        }
        return found;
    }
    static clearAllFlyweights(): void {
        PlayerFactory._playerFlyweights = [];
    }
}