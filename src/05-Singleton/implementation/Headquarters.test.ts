import { Headquarters } from "./Headquarters";


console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});


describe('test on HQ', () => {
    it('should be the identical one', () => {
        // given
        const HQ1 = Headquarters.getInstance();
        const HQ2 = Headquarters.getInstance();
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(HQ1).toBe(HQ2); // to check identicality, use "toBe" instead of "toEqual"
    });

    it('should work functionally', () => {
        // given
        const x = 12;
        const y = 42;
        const HQ = Headquarters.getInstance();
        // when
        HQ.callInAirstrike(x, y);
        // then
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining(x.toString()));
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining(y.toString()));
    });
});