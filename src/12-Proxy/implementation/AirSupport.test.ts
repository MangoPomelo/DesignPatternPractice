import { Squadron, TACP } from "./AirSupport";


console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});

describe('Test on Squadron', () => {
    it('should work correctly', () => {
        // given
        const a = 'H';
        const n = 9;
        const squadron = new Squadron('Gunfighter');
        // when
        squadron.attack(a, n);
        // then
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining(a));
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining(n.toString()));
    });
});

describe('Test on TACP', () => {
    it('should work correctly', () => {
        // given
        const MockedSquadron = jest.fn().mockImplementation(() => ({
            attack: jest.fn()
        })) as jest.Mock<Squadron>;
        const mockedSquadron = new MockedSquadron();
        const tacp = new TACP('Ybarra', mockedSquadron);
        const a = 'H';
        const n = 9;
        // when
        tacp.attack(a, n);
        // then
        expect(mockedSquadron.attack).toHaveBeenCalledWith(a, n);
    });
});