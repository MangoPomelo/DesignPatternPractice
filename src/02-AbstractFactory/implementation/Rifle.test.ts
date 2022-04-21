import { M16A4, G36A2, AK47 } from './Rifle';


console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});

describe('test on setups', () => {
    it('should be true that console.log is a mocked function', () => {
        expect(jest.isMockFunction(console.log)).toBe(true);
    });
});

describe('test on M16A4', () => {
    it('should shoot successfully in semi auto mode', () => {
        // given
        const m16a4 = new M16A4();
        // when
        m16a4.semiAutoShoot();
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('M16A4: 🦅 Da!');
    });
    it('should shoot successfully in full auto mode', () => {
        // given
        const m16a4 = new M16A4();
        // when
        m16a4.fullAutoShoot();
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('M16A4: 🦅 American fuck ya! Da-da-da...');
    });
});

describe('test on G36A2', () => {
    it('should shoot successfully in semi auto mode', () => {
        // given
        const g36a2 = new G36A2();
        // when
        g36a2.semiAutoShoot();
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('G36A2: 🍺 Ba!');
    });
    it('should shoot successfully in full auto mode', () => {
        // given
        const g36a2 = new G36A2();
        // when
        g36a2.fullAutoShoot();
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('G36A2: 🍺 Made in Germany! Brr...');
    });
});

describe('test on AK47', () => {
    it('should shoot successfully in semi auto mode', () => {
        // given
        const ak47 = new AK47();
        // when
        ak47.semiAutoShoot();
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('AK47: 🪆 Ta!');
    });
    it('should shoot successfully in full auto mode', () => {
        // given
        const ak47 = new AK47();
        // when
        ak47.fullAutoShoot();
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('AK47: 🪆 When russia come to you! Ta-ta-ta...');
    });
});