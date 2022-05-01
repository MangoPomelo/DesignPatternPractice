import { BreachManKitBuilder } from './Builder';
import { Quartermaster } from './Quartermaster';


jest.mock('./Builder');
afterEach(() => {
    jest.clearAllMocks();
})

describe('test on Quartermaster', () => {
    it('should work when calling Quartermaster.provideForPatrolman', () => {
        // given
        const builder = new BreachManKitBuilder();
        const qm = new Quartermaster(builder);
        // when
        qm.provideForPatrolman();
        // then
        expect(builder.packPrimaryWeapon).toBeCalledTimes(1);
        expect(builder.packSecondaryWeapon).toBeCalledTimes(1);
        expect(builder.packMeleeWeapon).toBeCalledTimes(1);
        expect(builder.packThrowableWeapon).toBeCalledTimes(1);
        expect(builder.packHelmet).toBeCalledTimes(1);
        expect(builder.packArmor).toBeCalledTimes(1);
        expect(builder.getKit).toBeCalledTimes(1);
    });

    it('should work when calling Quartermaster.provideForSpecialForce', () => {
        // given
        const builder = new BreachManKitBuilder();
        const qm = new Quartermaster(builder);
        // when
        qm.provideForPatrolman();
        // then
        expect(builder.packPrimaryWeapon).toBeCalledTimes(1);
        expect(builder.packSecondaryWeapon).toBeCalledTimes(1);
        expect(builder.packMeleeWeapon).toBeCalledTimes(1);
        expect(builder.packThrowableWeapon).toBeCalledTimes(1);
        expect(builder.packHelmet).toBeCalledTimes(1);
        expect(builder.packArmor).toBeCalledTimes(1);
        expect(builder.getKit).toBeCalledTimes(1);
    });

    it('should work when calling Quartermaster.provideForFrontlineSoldier', () => {
        // given
        const builder = new BreachManKitBuilder();
        const qm = new Quartermaster(builder);
        // when
        qm.provideForPatrolman();
        // then
        expect(builder.packPrimaryWeapon).toBeCalledTimes(1);
        expect(builder.packSecondaryWeapon).toBeCalledTimes(1);
        expect(builder.packMeleeWeapon).toBeCalledTimes(1);
        expect(builder.packThrowableWeapon).toBeCalledTimes(1);
        expect(builder.packHelmet).toBeCalledTimes(1);
        expect(builder.packArmor).toBeCalledTimes(1);
        expect(builder.getKit).toBeCalledTimes(1);
    });
});