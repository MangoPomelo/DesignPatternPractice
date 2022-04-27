import { M1911A1, USP45, Makarov } from './Pistol';


console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});

describe('test on setups', () => {
    it('should be true that console.log is a mocked function', () => {
        expect(jest.isMockFunction(console.log)).toBe(true);
    });
});

describe('test on M1911A1', () => {
    it('should shoot successfully', () => {
        // given
        const m1911a1 = new M1911A1();
        // when
        m1911a1.semiAutoShoot();
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('M1911A1: 🦅 Da!');
    });
});

describe('test on USP45', () => {
    it('should shoot successfully', () => {
        // given
        const usp45 = new USP45();
        // when
        usp45.semiAutoShoot();
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('USP45: 🍺 Ba!');
    });
});

describe('test on Makarov', () => {
    it('should shoot successfully', () => {
        // given
        const makarov = new Makarov();
        // when
        makarov.semiAutoShoot();
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('Makarov: 🪆 Ta!');
    });
});
