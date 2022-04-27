import { ConcreteTank } from "./Tank";


console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});

describe('test on concreteTank', () => {
    it('should fire and prompt out its name', () => {
        // given
        const tankName = 'M1 Abrams';
        const abrams = new ConcreteTank(tankName);
        // when
        abrams.fire();
        // then
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining(tankName));
    });

    it('should activate countermeasure and prompt out its name', () => {
        // given
        const tankName = 'M1 Abrams';
        const abrams = new ConcreteTank(tankName);
        // when
        abrams.countermeasure();
        // then
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining(tankName));
    });
});