import { AmericanFactory, GermanFactory, RussianFactory } from "./Factory";
import { Soldier } from "./Soldier";
import { AK47, G36A2, M16A4 } from "./Rifle";
import { M60E4, MG3, PKP } from "./MachineGun";
import { M1911A1, Makarov, USP45 } from "./Pistol";


jest.mock('./Factory');
jest.mock('./Rifle');
jest.mock('./MachineGun');
jest.mock('./Pistol');

afterEach(() => {
    jest.clearAllMocks();
});

describe('test on Soldier', () => {
    it('should work given american factory', () => {
        // given
        const mockedRifle = new M16A4();
        const mockedMachineGun = new M60E4();
        const mockedPistol = new M1911A1();

        const stubProvider = jest.mocked(new AmericanFactory());
        stubProvider.createRifle.mockReturnValue(mockedRifle);
        stubProvider.createMachineGun.mockReturnValue(mockedMachineGun);
        stubProvider.createPistol.mockReturnValue(mockedPistol);

        const soldier = new Soldier(stubProvider);
        // when
        soldier.killEmAll();
        // then
        expect(stubProvider.createMachineGun).toHaveBeenCalledTimes(1);
        expect(stubProvider.createRifle).toHaveBeenCalledTimes(1);
        expect(stubProvider.createPistol).toHaveBeenCalledTimes(1);

        expect(mockedMachineGun.fullAutoShoot).toHaveBeenCalledTimes(1);

        expect(mockedRifle.semiAutoShoot).toHaveBeenCalledTimes(3);
        expect(mockedRifle.fullAutoShoot).toHaveBeenCalledTimes(1);

        expect(mockedPistol.semiAutoShoot).toHaveBeenCalledTimes(2);
    });

    it('should work given german factory', () => {
        // given
        const mockedRifle = new G36A2();
        const mockedMachineGun = new MG3();
        const mockedPistol = new USP45();

        const stubProvider = jest.mocked(new GermanFactory());
        stubProvider.createRifle.mockReturnValue(mockedRifle);
        stubProvider.createMachineGun.mockReturnValue(mockedMachineGun);
        stubProvider.createPistol.mockReturnValue(mockedPistol);

        const soldier = new Soldier(stubProvider);
        // when
        soldier.killEmAll();
        // then
        expect(stubProvider.createMachineGun).toHaveBeenCalledTimes(1);
        expect(stubProvider.createRifle).toHaveBeenCalledTimes(1);
        expect(stubProvider.createPistol).toHaveBeenCalledTimes(1);

        expect(mockedMachineGun.fullAutoShoot).toHaveBeenCalledTimes(1);

        expect(mockedRifle.semiAutoShoot).toHaveBeenCalledTimes(3);
        expect(mockedRifle.fullAutoShoot).toHaveBeenCalledTimes(1);

        expect(mockedPistol.semiAutoShoot).toHaveBeenCalledTimes(2);
    });

    it('should work given russian factory', () => {
        // given
        const mockedRifle = new AK47();
        const mockedMachineGun = new PKP();
        const mockedPistol = new Makarov();

        const stubProvider = jest.mocked(new RussianFactory());
        stubProvider.createRifle.mockReturnValue(mockedRifle);
        stubProvider.createMachineGun.mockReturnValue(mockedMachineGun);
        stubProvider.createPistol.mockReturnValue(mockedPistol);

        const soldier = new Soldier(stubProvider);
        // when
        soldier.killEmAll();
        // then
        expect(stubProvider.createMachineGun).toHaveBeenCalledTimes(1);
        expect(stubProvider.createRifle).toHaveBeenCalledTimes(1);
        expect(stubProvider.createPistol).toHaveBeenCalledTimes(1);

        expect(mockedMachineGun.fullAutoShoot).toHaveBeenCalledTimes(1);

        expect(mockedRifle.semiAutoShoot).toHaveBeenCalledTimes(3);
        expect(mockedRifle.fullAutoShoot).toHaveBeenCalledTimes(1);

        expect(mockedPistol.semiAutoShoot).toHaveBeenCalledTimes(2);
    });
});