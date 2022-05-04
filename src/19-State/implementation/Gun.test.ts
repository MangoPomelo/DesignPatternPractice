import { Gun } from './Gun';
import { OnAndUnloaded } from './State';


const MockedOnAndUnload = OnAndUnloaded as jest.Mock<OnAndUnloaded>;

jest.mock('./State');
afterEach(() => {
    jest.clearAllMocks();
});

describe('test on Gun' , () => {
    it('should work correctly', () => {
        // given
        const gun = new Gun(30);
        // when
        gun.safetyOn();
        gun.safetyOff();
        gun.load();
        gun.unloaded();
        gun.shoot();
        // then
        const instance = MockedOnAndUnload.mock.instances[0];
        expect(instance.safetyOn).toHaveBeenCalledTimes(1);
        expect(instance.safetyOff).toHaveBeenCalledTimes(1);
        expect(instance.load).toHaveBeenCalledTimes(1);
        expect(instance.unloaded).toHaveBeenCalledTimes(1);
        expect(instance.safetyOn).toHaveBeenCalledTimes(1);
    });
});