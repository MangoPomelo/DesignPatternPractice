// @ts-ignore: module not found
import { Barrel } from './Missile';
jest.mock('./Missile', () => ({
    // @ts-ignore: name not be found
    Barrel: jest.fn().mockImplementation((t: Structure, massDamage: number, additionalDamage: number) => ({
        beThrown: jest.fn()
    }))
}), { virtual: true });

// @ts-ignore: module not found
import { Gate } from './Structure';
jest.mock('./Structure', () => ({
    Gate: jest.fn()
}), { virtual: true });

import { Catapult } from './SiegeEngine';


console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});

describe('Test on SiegeEngine', () => {
    describe('Test on Catapult', () => {
        it('should launch when loaded', () => {
            // given
            const kineticDamage = 100;
            const catapult = new Catapult(kineticDamage);
            const barrel = new Barrel(new Gate('the Front Gate', 50), 200, 0);
            catapult.load(barrel);
            // when
            const isLaunched = catapult.loose();
            // then
            expect(isLaunched).toBe(true);
            expect(barrel.beThrown).toHaveBeenCalledWith(kineticDamage);
        });

        it('should not launch when unloaded', () => {
            // given
            const kineticDamage = 100;
            const catapult = new Catapult(kineticDamage);
            // when
            const isLaunched = catapult.loose();
            // then
            expect(isLaunched).toBe(false);
        });

        it('should not launch twice with one loaded', () => {
            // given
            const kineticDamage = 100;
            const catapult = new Catapult(kineticDamage);
            const barrel = new Barrel(new Gate('Front Gate', 50), 200, 0);
            catapult.load(barrel);
            // when
            const isFirstTimeLaunched = catapult.loose();
            const isSecondTimeLaunched = catapult.loose();
            // then
            expect(isFirstTimeLaunched).toBe(true);
            expect(isSecondTimeLaunched).toBe(false);
        });
    });
});