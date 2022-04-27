import { AmericanFactory, GermanFactory, RussianFactory } from './Factory';
import { AK47, G36A2, M16A4 } from './Rifle';
import { M60E4, MG3, PKP } from './MachineGun';
import { M1911A1, Makarov, USP45 } from './Pistol';


jest.mock('./Rifle');
jest.mock('./MachineGun');
jest.mock('./Pistol');


describe('test on setups', () => {
    it.each([
        {name: 'M16A4', fn: M16A4},
        {name: 'M60E4', fn: M60E4},
        {name: 'M1911A1', fn: M1911A1},
        {name: 'G36A2', fn: G36A2},
        {name: 'MG3', fn: MG3},
        {name: 'USP45', fn: USP45},
        {name: 'AK47', fn: AK47},
        {name: 'PKP', fn: PKP},
        {name: 'Makarov', fn: Makarov},
    ])('should be true that $name is a mocked function', ({ name, fn }) => {
        expect(jest.isMockFunction(fn)).toBe(true);
    });
});

describe('test on AmericanFactory', () => {
    it('should be able to create G36A2', () => {
        // given
        const factory = new AmericanFactory();
        // when
        factory.createRifle();
        // then
        expect(M16A4).toHaveBeenCalledTimes(1);
    });
    it('should be able to create MG3', () => {
        // given
        const factory = new AmericanFactory();
        // when
        factory.createMachineGun();
        // then
        expect(M60E4).toHaveBeenCalledTimes(1);
    });
    it('should be able to create USP45', () => {
        // given
        const factory = new AmericanFactory();
        // when
        factory.createPistol();
        // then
        expect(M1911A1).toHaveBeenCalledTimes(1);
    });
});

describe('test on GermanFactory', () => {
    it('should be able to create G36A2', () => {
        // given
        const factory = new GermanFactory();
        // when
        factory.createRifle();
        // then
        expect(G36A2).toHaveBeenCalledTimes(1);
    });
    it('should be able to create MG3', () => {
        // given
        const factory = new GermanFactory();
        // when
        factory.createMachineGun();
        // then
        expect(MG3).toHaveBeenCalledTimes(1);
    });
    it('should be able to create USP45', () => {
        // given
        const factory = new GermanFactory();
        // when
        factory.createPistol();
        // then
        expect(USP45).toHaveBeenCalledTimes(1);
    });
});

describe('test on RussianFactory', () => {
    it('should be able to create AK47', () => {
        // given
        const factory = new RussianFactory();
        // when
        factory.createRifle();
        // then
        expect(AK47).toHaveBeenCalledTimes(1);
    });
    it('should be able to create PKP', () => {
        // given
        const factory = new RussianFactory();
        // when
        factory.createMachineGun();
        // then
        expect(PKP).toHaveBeenCalledTimes(1);
    });
    it('should be able to create Makarov', () => {
        // given
        const factory = new RussianFactory();
        // when
        factory.createPistol();
        // then
        expect(Makarov).toHaveBeenCalledTimes(1);
    });
});