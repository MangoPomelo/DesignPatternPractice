import { ActiveProtection, IRSmoke, ReactiveArmor, Smokescreen } from './Countermeasure';
import { Missile } from './Missile';


console.log = jest.fn();
jest.mock('./Missile');
afterEach(() => {
    jest.clearAllMocks();
});

describe('test on Countermeasure', () => {
    describe('test on Smokescreen', () => {
        it('should disrupt', () => {
            // given
            const mockedMissile = new Missile(0);
            const smokescreen = new Smokescreen();
            // when
            smokescreen.counteract(mockedMissile);
            // then
            expect(mockedMissile.worsen).toHaveBeenCalledTimes(1);
        });

        it('should disrupt successfully', () => {
            // given
            const mockedMissile = new Missile(0);
            mockedMissile.isDisarmed = jest.fn().mockReturnValue(true);
            const smokescreen = new Smokescreen();
            // when
            smokescreen.counteract(mockedMissile);
            // then
            expect(mockedMissile.worsen).toHaveBeenCalledTimes(1);
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining('​⭕'));
        });

        it('should fail to disrupt', () => {
            // given
            const mockedMissile = new Missile(0);
            mockedMissile.isDisarmed = jest.fn().mockReturnValue(false);
            const smokescreen = new Smokescreen();
            // when
            smokescreen.counteract(mockedMissile);
            // then
            expect(mockedMissile.worsen).toHaveBeenCalledTimes(1);
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining('​❌'));
        });
    });
    
    describe('test on IRSmoke', () => {
        it('should disrupt', () => {
            // given
            const mockedMissile = new Missile(0);
            const irSmoke = new IRSmoke();
            // when
            irSmoke.counteract(mockedMissile);
            // then
            expect(mockedMissile.worsen).toHaveBeenCalledTimes(1);
        });

        it('should disrupt successfully', () => {
            // given
            const mockedMissile = new Missile(0);
            mockedMissile.isDisarmed = jest.fn().mockReturnValue(true);
            const irSmoke = new IRSmoke();
            // when
            irSmoke.counteract(mockedMissile);
            // then
            expect(mockedMissile.worsen).toHaveBeenCalledTimes(1);
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining('​⭕'));
        });

        it('should fail to disrupt', () => {
            // given
            const mockedMissile = new Missile(0);
            mockedMissile.isDisarmed = jest.fn().mockReturnValue(false);
            const irSmoke = new IRSmoke();
            // when
            irSmoke.counteract(mockedMissile);
            // then
            expect(mockedMissile.worsen).toHaveBeenCalledTimes(1);
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining('​❌'));
        });
    });

    describe('test on ActiveProtection', () => {
        it('should disrupt', () => {
            // given
            const mockedMissile = new Missile(0);
            const activeProtection = new ActiveProtection();
            // when
            activeProtection.counteract(mockedMissile);
            // then
            expect(mockedMissile.worsen).toHaveBeenCalledTimes(1);
        });

        it('should disrupt successfully', () => {
            // given
            const mockedMissile = new Missile(0);
            mockedMissile.isDisarmed = jest.fn().mockReturnValue(true);
            const activeProtection = new ActiveProtection();
            // when
            activeProtection.counteract(mockedMissile);
            // then
            expect(mockedMissile.worsen).toHaveBeenCalledTimes(1);
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining('​⭕'));
        });

        it('should fail to disrupt', () => {
            // given
            const mockedMissile = new Missile(0);
            mockedMissile.isDisarmed = jest.fn().mockReturnValue(false);
            const activeProtection = new ActiveProtection();
            // when
            activeProtection.counteract(mockedMissile);
            // then
            expect(mockedMissile.worsen).toHaveBeenCalledTimes(1);
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining('​❌'));
        });
    });

    describe('test on ReactiveArmor', () => {
        it('should disrupt', () => {
            // given
            const mockedMissile = new Missile(0);
            const reactiveArmor = new ReactiveArmor();
            // when
            reactiveArmor.counteract(mockedMissile);
            // then
            expect(mockedMissile.worsen).toHaveBeenCalledTimes(1);
        });

        it('should disrupt successfully', () => {
            // given
            const mockedMissile = new Missile(0);
            mockedMissile.isDisarmed = jest.fn().mockReturnValue(true);
            const reactiveArmor = new ReactiveArmor();
            // when
            reactiveArmor.counteract(mockedMissile);
            // then
            expect(mockedMissile.worsen).toHaveBeenCalledTimes(1);
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining('​⭕'));
        });

        it('should fail to disrupt', () => {
            // given
            const mockedMissile = new Missile(0);
            mockedMissile.isDisarmed = jest.fn().mockReturnValue(false);
            const reactiveArmor = new ReactiveArmor();
            // when
            reactiveArmor.counteract(mockedMissile);
            // then
            expect(mockedMissile.worsen).toHaveBeenCalledTimes(1);
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining('​❌'));
        });
    });

    describe('test on chaining', () => {
        it('should constantly fail to disrupt', () => {
            // given
            const mockedMissile = new Missile(0);
            mockedMissile.isDisarmed = jest.fn().mockReturnValue(false);

            const smokescreen = new Smokescreen();
            const activeProtection = new ActiveProtection();
            const reactiveArmor = new ReactiveArmor();

            smokescreen.setNextCountermeasure(activeProtection);
            activeProtection.setNextCountermeasure(reactiveArmor)

            // when
            smokescreen.counteract(mockedMissile);

            // then
            expect(mockedMissile.worsen).toHaveBeenCalledTimes(3);
            expect(console.log).toHaveBeenNthCalledWith(1, expect.stringContaining('​❌'));
            expect(console.log).toHaveBeenNthCalledWith(2, expect.stringContaining('​❌'));
            expect(console.log).toHaveBeenNthCalledWith(3, expect.stringContaining('​❌'));
        });

        it('should succeed to disrupt at last', () => {
            // given
            const mockedMissile = new Missile(0);
            mockedMissile.isDisarmed = jest.fn().mockReturnValue(true).mockReturnValueOnce(false).mockReturnValueOnce(false);

            const smokescreen = new Smokescreen();
            const activeProtection = new ActiveProtection();
            const reactiveArmor = new ReactiveArmor();

            smokescreen.setNextCountermeasure(activeProtection);
            activeProtection.setNextCountermeasure(reactiveArmor)

            // when
            smokescreen.counteract(mockedMissile);

            // then
            expect(mockedMissile.worsen).toHaveBeenCalledTimes(3);
            expect(console.log).toHaveBeenNthCalledWith(1, expect.stringContaining('​❌'));
            expect(console.log).toHaveBeenNthCalledWith(2, expect.stringContaining('​❌'));
            expect(console.log).toHaveBeenNthCalledWith(3, expect.stringContaining('​⭕'));
        });

        it('should dealt by 2 handlers', () => {
            // given
            const mockedMissile = new Missile(0);
            mockedMissile.isDisarmed = jest.fn().mockReturnValue(true).mockReturnValueOnce(false);

            const smokescreen = new Smokescreen();
            const activeProtection = new ActiveProtection();
            const reactiveArmor = new ReactiveArmor();

            smokescreen.setNextCountermeasure(activeProtection);
            activeProtection.setNextCountermeasure(reactiveArmor)

            // when
            smokescreen.counteract(mockedMissile);

            // then
            expect(mockedMissile.worsen).toHaveBeenCalledTimes(2);
            expect(console.log).toHaveBeenNthCalledWith(1, expect.stringContaining('​❌'));
            expect(console.log).toHaveBeenNthCalledWith(2, expect.stringContaining('​⭕'));
        });
    });
});