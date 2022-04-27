import { SergeantYork, Tunguska } from "./AntiAirUnit";


console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});

describe('test on Tunguska', () => {
    it('should fire when it is enabled', () => {
        // given
        const damage = 100;
        const tunguska = new Tunguska(damage);
        tunguska.setPowerState(true);
        tunguska.setRadarState(true);
        tunguska.setWeaponState(true);
        // when
        tunguska.fire();
        // then
        expect(console.log).toHaveBeenCalledTimes(2);
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining(damage.toString()));
    });
    it('should not fire when it is not enabled', () => {
        // given
        const damage = 100;
        const tunguska = new Tunguska(damage);
        // when
        tunguska.fire();
        // then
        expect(console.log).toHaveBeenCalledTimes(0);
    });
});

describe('test on SergeantYork', () => {
    it('should fire when it is enabled', () => {
        // given
        const damage = 100;
        const sergeantYork = new SergeantYork(damage);
        sergeantYork.setPowerState(true);
        sergeantYork.setRadarState(true);
        sergeantYork.setWeaponState(true);
        // when
        sergeantYork.fire();
        // then
        expect(console.log).toHaveBeenCalledTimes(2);
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining(damage.toString()));
    });
    it('should not fire when it is not enabled', () => {
        // given
        const damage = 100;
        const sergeantYork = new SergeantYork(damage);
        // when
        sergeantYork.fire();
        // then
        expect(console.log).toHaveBeenCalledTimes(0);
    });
});