import { ExplosiveM79, FlareM79, SmokeM79 } from "./M79";
import { ExplosiveGrenade, FlareGrenade, SmokeGrenade } from './Grenade';


// mock every class in the module
jest.mock('./Grenade');
// grab the references to the classes
const mockedSmokeGrenade = SmokeGrenade as jest.Mock<SmokeGrenade>;
const mockedFlareGrenade = FlareGrenade as jest.Mock<FlareGrenade>;
const mockedExplosiveGrenade = ExplosiveGrenade as jest.Mock<ExplosiveGrenade>;

// overwrite console.log function (no needing to restore cuz every test runs in a parallel thread)
console.log = jest.fn();

// jest.useFakeTimers() must be done before jest.spyOn() otherwise it will spy the real one instead, which will be shadowed then
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

afterEach(() => {
    jest.clearAllMocks();
});

describe('test on setups', () => {
    it.each([
        {name: 'ConsoleLog', fn: console.log},
        {name: 'SmokeGrenade', fn: SmokeGrenade},
        {name: 'FlareGrenade', fn: FlareGrenade},
        {name: 'ExplosiveGrenade', fn: ExplosiveGrenade}
    ])('should be true that $name is mocked', ({name, fn}) => {
        expect(jest.isMockFunction(fn)).toBe(true);
    });
});

describe('test on SmokeM79', () => {
    it('should have been really loaded a smoke grenade before shooting', () => {
        // given
        const smokeM79 = new SmokeM79();
        // when
        smokeM79.launch();
        // then
        expect(mockedSmokeGrenade).toHaveBeenCalledTimes(1);
    });
    it('should launch successfully', () => {
        // given
        const smokeM79 = new SmokeM79();
        // when
        smokeM79.launch();
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenLastCalledWith('M79 launchs: 🚀');
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
    });
    it('should detonate smoke grenade after 2s', () => {
        // given
        const smokeM79 = new SmokeM79();
        // when
        smokeM79.launch();
        jest.advanceTimersByTime(2000);
        // then
        const instance = mockedSmokeGrenade.mock.instances[0];
        expect(instance.detonate).toHaveBeenCalledTimes(1);
    });
});

describe('test on FlareM79', () => {
    it('should have been really loaded a flare grenade before shooting', () => {
        // given
        const flareM79 = new FlareM79();
        // when
        flareM79.launch();
        // then
        expect(mockedFlareGrenade).toHaveBeenCalledTimes(1);
    });
    it('should launch successfully', () => {
        // given
        const flareM79 = new FlareM79();
        // when
        flareM79.launch();
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenLastCalledWith('M79 launchs: 🚀');
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
    });
    it('should detonate flare grenade after 2s', () => {
        // given
        const flareM79 = new FlareM79();
        // when
        flareM79.launch();
        jest.advanceTimersByTime(2000);
        // then
        const instance = mockedFlareGrenade.mock.instances[0];
        expect(instance.detonate).toHaveBeenCalledTimes(1);
    });
});

describe('test on ExplosiveM79', () => {
    it('should have been really loaded an explosive grenade before shooting', () => {
        // given
        const explosiveM79 = new ExplosiveM79();
        // when
        explosiveM79.launch();
        // then
        expect(mockedExplosiveGrenade).toHaveBeenCalledTimes(1);
    });
    it('should launch successfully', () => {
        // given
        const explosiveM79 = new ExplosiveM79();
        // when
        explosiveM79.launch();
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenLastCalledWith('M79 launchs: 🚀');
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
    });
    it('should detonate explosive grenade after 2s', () => {
        // given
        const explosiveM79 = new ExplosiveM79();
        // when
        explosiveM79.launch();
        jest.advanceTimersByTime(2000);
        // then
        const instance = mockedExplosiveGrenade.mock.instances[0];
        expect(instance.detonate).toHaveBeenCalledTimes(1);
    });
});