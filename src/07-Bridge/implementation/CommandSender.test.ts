import { CommandSender } from "./CommandSender";
import { AntiAirUnit } from "./AntiAirUnit";


describe('test on CommandSender', () => {
    it('should work functionally on activation', () => {
        // given
        const MockedAA = jest.fn().mockImplementation(() => ({
            setPowerState: jest.fn(),
            setRadarState: jest.fn(),
            setWeaponState: jest.fn(),
            fire: jest.fn()
        })) as jest.Mock<AntiAirUnit>;
        const mockedAA = new MockedAA();
        const panel = new CommandSender(mockedAA);
        // when
        panel.activate();
        // then
        expect(mockedAA.setPowerState).toHaveBeenCalledWith(true);
        expect(mockedAA.setRadarState).toHaveBeenCalledWith(true);
        expect(mockedAA.setWeaponState).toHaveBeenCalledWith(true);
        expect(mockedAA.fire).toHaveBeenCalledTimes(1);
    });

    it('should work functionally on deactivation', () => {
        // given
        const MockedAA = jest.fn().mockImplementation(() => ({
            setPowerState: jest.fn(),
            setRadarState: jest.fn(),
            setWeaponState: jest.fn(),
            fire: jest.fn()
        })) as jest.Mock<AntiAirUnit>;
        const mockedAA = new MockedAA();
        const panel = new CommandSender(mockedAA);
        // when
        panel.deactivate();
        // then
        expect(mockedAA.setPowerState).toHaveBeenCalledWith(false);
        expect(mockedAA.setRadarState).toHaveBeenCalledWith(false);
        expect(mockedAA.setWeaponState).toHaveBeenCalledWith(false);
        expect(mockedAA.fire).toHaveBeenCalledTimes(1);
    });
});