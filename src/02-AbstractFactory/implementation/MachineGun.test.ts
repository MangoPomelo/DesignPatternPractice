import { M60E4, MG3, PKP } from './MachineGun';


console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});

describe('test on setups', () => {
    it('should be true that console.log is a mocked function', () => {
        expect(jest.isMockFunction(console.log)).toBe(true);
    });
});

describe('test on M60E4', () => {
    it('should shoot successfully', () => {
        // given
        const m60e4 = new M60E4();
        // when
        m60e4.fullAutoShoot();
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('M60E4: 🦅 American fuck ya! Da-da-da...');
    });
});

describe('test on MG3', () => {
    it('should shoot successfully', () => {
        // given
        const mg3 = new MG3();
        // when
        mg3.fullAutoShoot();
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('MG3: 🍺 Made in Germany! Brr...');
    });
});

describe('test on PKP', () => {
    it('should shoot successfully', () => {
        // given
        const pkp = new PKP();
        // when
        pkp.fullAutoShoot();
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('PKP: 🪆 When russia come to you! Ta-ta-ta...');
    });
});