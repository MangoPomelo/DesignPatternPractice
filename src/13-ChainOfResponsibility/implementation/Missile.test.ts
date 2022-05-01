import { Missile } from './Missile';


describe('test on Missile', () => {
    it('should be functional even has been hit', () => {
        // given
        const maxState = 10;
        const missile = new Missile(maxState);
        // when
        missile.worsen(9);
        // then
        expect(missile.isDisarmed()).toBe(false);
    });

    it('should be disarmed when state is changed below 0', () => {
        // given
        const maxState = 10;
        const missile = new Missile(maxState);
        // when
        missile.worsen(12);
        // then
        expect(missile.isDisarmed()).toBe(true);
    });
});