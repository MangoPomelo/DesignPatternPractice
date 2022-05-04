import { Gun } from './Gun';
import { OffAndUnloaded, OnAndLoaded, OnAndUnloaded } from './State';


const MockGun = jest.fn().mockImplementation(() => ({
    setState: jest.fn()
})) as jest.Mock<Gun>;

afterEach(() => {
    jest.clearAllMocks();
});

describe('test on State', () => {
    describe('test on OnAndUnloaded', () => {
        it('should work correctly on OnAndUnloaded.load', () => {
            // given
            const mockGun = new MockGun();
            const state = new OnAndUnloaded(mockGun);
            // when
            state.load();
            // then
            expect(mockGun.setState).toHaveBeenCalledWith(expect.any(OnAndLoaded));
        });

        it('should work correctly on OnAndUnloaded.safetyOff', () => {
            // given
            const mockGun = new MockGun();
            const state = new OnAndUnloaded(mockGun);
            // when
            state.safetyOff();
            // then
            expect(mockGun.setState).toHaveBeenCalledWith(expect.any(OffAndUnloaded));
        });
    });
});