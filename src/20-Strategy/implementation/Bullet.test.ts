import { FullMetalJacket } from './Bullet';


console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});

describe('test on Bullet', () => {
    describe('test on FMJ', () => {
        it('should work correctly', () => {
            // given
            const dmg = 12;
            const fmj = new FullMetalJacket(dmg);
            // when
            fmj.trigger();
            // then
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(dmg.toString()));
        });
    });
});