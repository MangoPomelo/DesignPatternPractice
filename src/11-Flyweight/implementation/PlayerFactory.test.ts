import { PlayerFactory } from "./PlayerFactory";
import { CounterTerrorist, Terrorist, PlayerFlyweight } from "./Player";



jest.mock('./Player', () => ({
    CounterTerrorist: jest.fn(),
    Terrorist: jest.fn(),
    PlayerFlyweight: jest.fn().mockImplementation((task, texture) => new (class PlayerFlyweight {
        private _task: string;
        private _texture: string;
        constructor(task: string, texture: string) {
            this._task = task;
            this._texture = texture;
        }
        getTask(): string {
            return this._task;
        }
        getTexture(): string{
            return this._texture;
        }
    })(task, texture))
}));
afterEach(() => {
    jest.clearAllMocks();
    PlayerFactory.clearAllFlyweights();
});

describe('Test on PlayerFactory', () => {
    it('should create terrorist correctly', () => {
        // given
        const weapon = 'AK47';
        const hp = 100;
        const task = 'plant a bomb';
        const texture = 'Arctic Avengers';
        // when
        PlayerFactory.createTerrorist(weapon, hp, task, texture);
        // then
        expect(Terrorist).toHaveBeenCalledTimes(1);
        expect(Terrorist).toHaveBeenCalledWith(weapon, hp, expect.any(Object));
    });

    it('should create counter-terrorist correctly', () => {
        // given
        const weapon = 'M4A1';
        const hp = 100;
        const task = 'diffuse the bomb';
        const texture = 'SAS';
        // when
        PlayerFactory.createCounterTerrorist(weapon, hp, task, texture);
        // then
        expect(CounterTerrorist).toHaveBeenCalledTimes(1);
        expect(CounterTerrorist).toHaveBeenCalledWith(weapon, hp, expect.any(Object));
    });

    it('should use the identical flyweight given the same task and texture', () => {
        // given
        const weapon1 = 'M4A1';
        const weapon2 = 'AUG';
        const weapon3 = 'UMP45';
        const hp = 100;
        const task = 'diffuse the bomb';
        const texture1 = 'SAS';
        const texture2 = 'SEAL';
        // when
        PlayerFactory.createCounterTerrorist(weapon1, hp, task, texture1);
        PlayerFactory.createCounterTerrorist(weapon2, hp, task, texture2);
        PlayerFactory.createCounterTerrorist(weapon3, hp, task, texture2);
        // then
        expect(PlayerFlyweight).toHaveBeenCalledTimes(2);
    });
});