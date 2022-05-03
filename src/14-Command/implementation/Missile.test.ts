import { Barrel } from "./Missile";

// @ts-ignore: module not found
import { Gate } from './Structure';
jest.mock('./Structure', () => ({
    Gate: jest.fn().mockImplementation(() => ({
        damage: jest.fn(),
        isDestroyed: jest.fn().mockReturnValue(false),
        onDestroy: jest.fn()
    }))
}), { virtual: true });


console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});

describe('Test on Missile', () => {
    describe('Test on Barrel', () => {
        it('should be thrown and apply correct damage to the target', () => {
            // given
            const target = new Gate('the Back Gate', 100);
            const kineticDamage = 10;
            const massDamage = 20;
            const additionalDamage = 0;
            const barrel = new Barrel(target, massDamage, additionalDamage);
            // when
            barrel.beThrown(kineticDamage);
            // then
            expect(target.damage).toHaveBeenCalledWith(kineticDamage + massDamage + additionalDamage);
        });

        it('should invoke Structure.onDestroy when states satisfies', () => {
            // given
            const target = new Gate('the Back Gate', 0);
            target.isDestroyed = jest.fn().mockReturnValue(true);
            const barrel = new Barrel(target, 0, 0);
            // when
            barrel.beThrown(0);
            // then
            expect(target.onDestroy).toHaveBeenCalledTimes(1);
        });
    });
});