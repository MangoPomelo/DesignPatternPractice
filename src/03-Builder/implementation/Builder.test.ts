import { SniperKitBuilder, BreachManKitBuilder } from "./Builder";
import { Kit } from './Kit';

jest.mock('./Kit');
const mockedKit = Kit as jest.Mock<Kit>;
afterEach(() => {
    jest.clearAllMocks();
});


describe('test on SniperKitBuilder', () => {
    it('should work when calling SniperKitBuilder.packPrimaryWeapon', () => {
        // given
        const builder = new SniperKitBuilder();
        // when
        builder.packPrimaryWeapon();
        // then
        const instance = mockedKit.mock.instances[0];
        expect(instance.addOnHand).toHaveBeenCalledTimes(1);
        expect(instance.addOnHand).toHaveBeenCalledWith('M24');
    });

    it('should work when calling SniperKitBuilder.packSecondaryWeapon with true', () => {
        // given
        const builder = new SniperKitBuilder();
        // when
        builder.packSecondaryWeapon(true);
        // then
        const instance = mockedKit.mock.instances[0];
        expect(instance.addOnHand).toHaveBeenCalledTimes(1);
        expect(instance.addOnHand).toHaveBeenCalledWith('MP7');
    });

    it('should work when calling SniperKitBuilder.packSecondaryWeapon with false', () => {
        // given
        const builder = new SniperKitBuilder();
        // when
        builder.packSecondaryWeapon(false);
        // then
        const instance = mockedKit.mock.instances[0];
        expect(instance.addOnHand).toHaveBeenCalledTimes(1);
        expect(instance.addOnHand).toHaveBeenCalledWith('P226');
    });

    it('should work when calling SniperKitBuilder.packMeleeWeapon', () => {
        // given
        const builder = new SniperKitBuilder();
        // when
        builder.packMeleeWeapon();
        // then
        const instance = mockedKit.mock.instances[0];
        expect(instance.addOnHand).toHaveBeenCalledTimes(1);
        expect(instance.addOnHand).toHaveBeenCalledWith('bayonet');
    });

    it('should work when calling SniperKitBuilder.packThrowableWeapon with true', () => {
        // given
        const builder = new SniperKitBuilder();
        // when
        builder.packThrowableWeapon(true);
        // then
        const instance = mockedKit.mock.instances[0];
        expect(instance.addOnHand).toHaveBeenCalledTimes(1);
        expect(instance.addOnHand).toHaveBeenCalledWith('M67');
    });

    it('should work when calling SniperKitBuilder.packThrowableWeapon with false', () => {
        // given
        const builder = new SniperKitBuilder();
        // when
        builder.packThrowableWeapon(false);
        // then
        const instance = mockedKit.mock.instances[0];
        expect(instance.addOnHand).toHaveBeenCalledTimes(1);
        expect(instance.addOnHand).toHaveBeenCalledWith('M18');
    });

    it('should work when calling SniperKitBuilder.packArmor with true', () => {
        // given
        const builder = new SniperKitBuilder();
        // when
        builder.packArmor(true);
        // then
        const instance = mockedKit.mock.instances[0];
        expect(instance.addBodygear).toHaveBeenCalledTimes(1);
        expect(instance.addBodygear).toHaveBeenCalledWith('vest');
    });

    it('should work when calling SniperKitBuilder.packArmor with false', () => {
        // given
        const builder = new SniperKitBuilder();
        // when
        builder.packArmor(false);
        // then
        const instance = mockedKit.mock.instances[0];
        expect(instance.addBodygear).toHaveBeenCalledTimes(1);
        expect(instance.addBodygear).toHaveBeenCalledWith('rig');
    });

    it('should work when calling SniperKitBuilder.packHelmet with true', () => {
        // given
        const builder = new SniperKitBuilder();
        // when
        builder.packHelmet(true);
        // then
        const instance = mockedKit.mock.instances[0];
        expect(instance.addHeadwear).toHaveBeenCalledTimes(1);
        expect(instance.addHeadwear).toHaveBeenCalledWith('helmet with NVG');
    });

    it('should work when calling SniperKitBuilder.packHelmet with false', () => {
        // given
        const builder = new SniperKitBuilder();
        // when
        builder.packHelmet(false);
        // then
        const instance = mockedKit.mock.instances[0];
        expect(instance.addHeadwear).toHaveBeenCalledTimes(1);
        expect(instance.addHeadwear).toHaveBeenCalledWith('helmet');
    });
});

describe('test on BreachManKitBuilder', () => {
    it('should work when calling BreachManKitBuilder.packPrimaryWeapon', () => {
        // given
        const builder = new BreachManKitBuilder();
        // when
        builder.packPrimaryWeapon();
        // then
        const instance = mockedKit.mock.instances[0];
        expect(instance.addOnHand).toHaveBeenCalledTimes(1);
        expect(instance.addOnHand).toHaveBeenCalledWith('AA12');
    });

    it('should work when calling BreachManKitBuilder.packSecondaryWeapon with true', () => {
        // given
        const builder = new BreachManKitBuilder();
        // when
        builder.packSecondaryWeapon(true);
        // then
        const instance = mockedKit.mock.instances[0];
        expect(instance.addOnHand).toHaveBeenCalledTimes(1);
        expect(instance.addOnHand).toHaveBeenCalledWith('G18');
    });

    it('should work when calling BreachManKitBuilder.packSecondaryWeapon with false', () => {
        // given
        const builder = new BreachManKitBuilder();
        // when
        builder.packSecondaryWeapon(false);
        // then
        const instance = mockedKit.mock.instances[0];
        expect(instance.addOnHand).toHaveBeenCalledTimes(1);
        expect(instance.addOnHand).toHaveBeenCalledWith('M9');
    });

    it('should work when calling BreachManKitBuilder.packMeleeWeapon', () => {
        // given
        const builder = new BreachManKitBuilder();
        // when
        builder.packMeleeWeapon();
        // then
        const instance = mockedKit.mock.instances[0];
        expect(instance.addOnHand).toHaveBeenCalledTimes(1);
        expect(instance.addOnHand).toHaveBeenCalledWith('SEAL');
    });

    it('should work when calling BreachManKitBuilder.packThrowableWeapon with true', () => {
        // given
        const builder = new BreachManKitBuilder();
        // when
        builder.packThrowableWeapon(true);
        // then
        const instance = mockedKit.mock.instances[0];
        expect(instance.addOnHand).toHaveBeenCalledTimes(1);
        expect(instance.addOnHand).toHaveBeenCalledWith('M67');
    });

    it('should work when calling BreachManKitBuilder.packThrowableWeapon with false', () => {
        // given
        const builder = new BreachManKitBuilder();
        // when
        builder.packThrowableWeapon(false);
        // then
        const instance = mockedKit.mock.instances[0];
        expect(instance.addOnHand).toHaveBeenCalledTimes(1);
        expect(instance.addOnHand).toHaveBeenCalledWith('M84');
    });

    it('should work when calling BreachManKitBuilder.packArmor with true', () => {
        // given
        const builder = new BreachManKitBuilder();
        // when
        builder.packArmor(true);
        // then
        const instance = mockedKit.mock.instances[0];
        expect(instance.addBodygear).toHaveBeenCalledTimes(1);
        expect(instance.addBodygear).toHaveBeenCalledWith('vest');
    });

    it('should work when calling BreachManKitBuilder.packArmor with false', () => {
        // given
        const builder = new BreachManKitBuilder();
        // when
        builder.packArmor(false);
        // then
        const instance = mockedKit.mock.instances[0];
        expect(instance.addBodygear).toHaveBeenCalledTimes(1);
        expect(instance.addBodygear).toHaveBeenCalledWith('rig');
    });

    it('should work when calling BreachManKitBuilder.packHelmet with true', () => {
        // given
        const builder = new BreachManKitBuilder();
        // when
        builder.packHelmet(true);
        // then
        const instance = mockedKit.mock.instances[0];
        expect(instance.addHeadwear).toHaveBeenCalledTimes(1);
        expect(instance.addHeadwear).toHaveBeenCalledWith('helmet with NVG');
    });

    it('should work when calling BreachManKitBuilder.packHelmet with false', () => {
        // given
        const builder = new BreachManKitBuilder();
        // when
        builder.packHelmet(false);
        // then
        const instance = mockedKit.mock.instances[0];
        expect(instance.addHeadwear).toHaveBeenCalledTimes(1);
        expect(instance.addHeadwear).toHaveBeenCalledWith('helmet');
    });
});