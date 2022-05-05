import { Gun } from './Gun';
import { FullMetalJacket, JacketedSoftPoint } from './Bullet';
jest.mock('./Bullet');


describe('test on Gun', () => {
    it('should work correctly without reloading', () => {
        // given
        const mockBullet = new FullMetalJacket(12);
        const gun = new Gun(mockBullet);
        // when
        gun.shoot();
        // then
        expect(mockBullet.trigger).toHaveBeenCalledTimes(1);
    });

    it('should work correctly with reloading', () => {
        // given
        const initBullet = new FullMetalJacket(12);
        const newBullet = new JacketedSoftPoint(25);
        const gun = new Gun(initBullet);
        // when
        gun.reload(newBullet);
        gun.shoot();
        // then
        expect(newBullet.trigger).toHaveBeenCalledTimes(1);
    })
});