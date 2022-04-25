import { Cartridge556, Cartridge762, Adapter } from "./Cartridge";


console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});

describe('test on 556', () => {
    it('should work functionally', () => {
        // given
        const damage = 24;
        const cartridge = new Cartridge556(damage);
        // when
        cartridge.fireLowCaliber();
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining(damage.toString()));
    });
});

describe('test on 762', () => {
    it('should work functionally', () => {
        // given
        const damage = 36;
        const cartridge = new Cartridge762(damage);
        // when
        cartridge.fireHighCaliber();
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining(damage.toString()));
    });
});

describe('test on Adapter', () => {
    it('should work functionally', () => {
        // given
        const damage = 24;
        const MockedCartridge = jest.fn().mockImplementation(() => ({
            _damage: damage,
            fireLowCaliber: jest.fn()
        })) as jest.Mock<Cartridge556>;
        const cartridge = new MockedCartridge();
        const adapter = new Adapter(cartridge);
        // when
        adapter.fireHighCaliber();
        // then
        expect(cartridge.fireLowCaliber).toHaveBeenCalledTimes(1);
    });
});