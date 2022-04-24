import { DigistructableGun, TedioreGun, FireBall } from './Prototype';


console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});

describe('test on DigistructableGun', () => {
    it('should work functionally on shooting and reloading', () => {
        // given
        const capacity = 6;
        const damage = 3;
        const revolver = new DigistructableGun(capacity, damage);
        // when
        for (let i = 0; i < capacity; i++) {
            revolver.shoot();
        }
        revolver.shoot();
        revolver.reload();
        revolver.shoot();
        // then
        expect(console.log).toHaveBeenCalledTimes(9);
        expect(console.log).toHaveBeenNthCalledWith(8, expect.stringContaining('⏱️'));
        expect(console.log).toHaveBeenNthCalledWith(7, expect.stringContaining('◻️'));
        expect(console.log).toHaveBeenLastCalledWith(expect.stringContaining('🔫'));
        expect(console.log).toHaveBeenLastCalledWith(expect.stringContaining(damage.toString()));
    });

    it('should work fine on cloning', () => {
        // given
        const capacity = 1;
        const damage = 999;
        const prototypeElephantGun = new DigistructableGun(capacity, damage);
        const clonedElephantGun1 = prototypeElephantGun.clone();
        const clonedElephantGun2 = prototypeElephantGun.clone();
        // when
        clonedElephantGun1.shoot();
        clonedElephantGun1.shoot();
        clonedElephantGun2.shoot();
        clonedElephantGun2.shoot();
        // then
        expect(console.log).toHaveBeenCalledTimes(6);
        expect(console.log).toHaveBeenNthCalledWith(3, expect.stringContaining('🔫'));
        expect(console.log).toHaveBeenNthCalledWith(4, expect.stringContaining('◻️'));
        expect(console.log).toHaveBeenNthCalledWith(5, expect.stringContaining('🔫'));
        expect(console.log).toHaveBeenNthCalledWith(6, expect.stringContaining('◻️'));
    });
});

describe('test on TedioreGun', () => {
    it('should work functionally on shooting, reloading and launching', () => {
        // given
        const capacity = 1;
        const damage = 10;
        const explosiveDamage = 999;
        const nuke = new TedioreGun(capacity, damage, explosiveDamage);
        // when
        nuke.shoot();
        nuke.shoot();
        nuke.reload();
        nuke.launchGrenade();
        // then
        expect(console.log).toHaveBeenCalledTimes(4);
        expect(console.log).toHaveBeenNthCalledWith(1, expect.stringContaining('🔫'));
        expect(console.log).toHaveBeenNthCalledWith(2, expect.stringContaining('◻️'));
        expect(console.log).toHaveBeenNthCalledWith(3, expect.stringContaining('⏱️'));
        expect(console.log).toHaveBeenNthCalledWith(4, expect.stringContaining(explosiveDamage.toString()));
    });

    it('should work fine on cloning', () => {
        // given
        const capacity = 1;
        const damage = 999;
        const explosiveDamage = 0;
        const prototypeElephantGun = new TedioreGun(capacity, damage, explosiveDamage);
        const clonedElephantGun1 = prototypeElephantGun.clone();
        const clonedElephantGun2 = prototypeElephantGun.clone();
        // when
        clonedElephantGun1.shoot();
        clonedElephantGun1.shoot();
        clonedElephantGun2.shoot();
        clonedElephantGun2.shoot();
        // then
        expect(console.log).toHaveBeenCalledTimes(6);
        expect(console.log).toHaveBeenNthCalledWith(3, expect.stringContaining('🔫'));
        expect(console.log).toHaveBeenNthCalledWith(4, expect.stringContaining('◻️'));
        expect(console.log).toHaveBeenNthCalledWith(5, expect.stringContaining('🔫'));
        expect(console.log).toHaveBeenNthCalledWith(6, expect.stringContaining('◻️'));
    });
});

describe('test on FireBall', () => {
    it('should work functionally on shooting', () => {
        // given
        const damage = 500;
        const fireBall = new FireBall(damage);
        // when
        fireBall.shoot();
        fireBall.shoot();
        // then
        expect(console.log).toHaveBeenCalledTimes(2);
    });

    it('should work fine on cloning', () => {
        // given
        const damage = 500;
        const prototypeFireBall = new FireBall(damage);
        const clonedFireBall1 = prototypeFireBall.clone();
        const clonedFireBall2 = prototypeFireBall.clone();
        // when
        clonedFireBall1.shoot();
        clonedFireBall1.shoot();
        clonedFireBall2.shoot();
        clonedFireBall2.shoot();
        // then
        expect(console.log).toHaveBeenCalledTimes(6);
    });
});