import { Musket } from './Weapon';

console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});

describe('test on Weapon', () => {
    describe('test on Musket', () => {
        it('should work functionally', () => {
            // given
            const musket = new Musket();
            // when
            musket.templateMethod();
            // then
            expect(console.log).toHaveBeenCalledTimes(5);
        });
    });
});