import { SmokeGrenade, FlareGrenade, ExplosiveGrenade } from './Grenade';


// overwrite console.log function (no needing to restore cuz every test runs in a parallel thread)
console.log = jest.fn();

afterEach(() => {
    jest.clearAllMocks();
});

describe('test on setups', () => {
    it.each([
        {name: 'ConsoleLog', fn: console.log},
    ])('should be true that $name is mocked', ({name, fn}) => {
        expect(jest.isMockFunction(fn)).toBe(true);
    });
    it.each([
        {name: 'SmokeGrenade', fn: SmokeGrenade}
    ])('should not be true that $name is mocked', ({name, fn}) => {
        expect(jest.isMockFunction(fn)).not.toBe(true);
    });
});

describe('test on smoke grenade', () => {
    it('should detonate with a huge amount of smoke', () => {
        // given
        const smokeGrenade = new SmokeGrenade();
        // when
        smokeGrenade.detonate();
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenLastCalledWith('SmokeGrenade: ☁️');
    });
});

describe('test on flare grenade', () => {
    it('should detonate with a flare signal', () => {
        // given
        const flareGrenade = new FlareGrenade();
        // when
        flareGrenade.detonate();
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenLastCalledWith('FlareGrenade: 🌟');
    });
});

describe('test on explosive grenade', () => {
    it('should detonate with a big bang', () => {
        // given
        const explosiveGrenade = new ExplosiveGrenade();
        // when
        explosiveGrenade.detonate();
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenLastCalledWith('ExplosiveGrenade: 💥');
    });
});