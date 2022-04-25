import { ActiveProtectionDecorator, IRSmokeDecorator, ReactiveArmorDecorator } from './Decorator';
import { ConcreteTank } from './Tank';


jest.mock('./Tank');
console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});

describe('test on Decorator', () => {
    it('should invoke ConcreteTank.getName with nested decorators', () => {
        // given
        const name = 'M1 Abrams';
        const abrams = new ConcreteTank(name);
        const activeProtectedAbrams = new ActiveProtectionDecorator(abrams);
        const irSmoked = new IRSmokeDecorator(activeProtectedAbrams);
        const reactiveArmored = new ReactiveArmorDecorator(irSmoked);
        // when
        reactiveArmored.getName();
        // then
        expect(abrams.getName).toHaveBeenCalledTimes(1);
    });

    it('should work functionally with nested decorators', () => {
        // given
        const name = 'M1 Abrams';
        const abrams = new ConcreteTank(name);
        const activeProtectedAbrams = new ActiveProtectionDecorator(abrams);
        const irSmoked = new IRSmokeDecorator(activeProtectedAbrams);
        const reactiveArmored = new ReactiveArmorDecorator(irSmoked);
        // when
        reactiveArmored.countermeasure();
        // then
        expect(console.log).toHaveBeenCalledTimes(3); // pass the last log since abrams has been mocked
    });
});