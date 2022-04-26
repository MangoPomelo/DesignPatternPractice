import { CombatUnit } from './CombatUnit';


console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});

describe('test on CombatUnit', () => {
    it('should work correctly on CombatUnit.assault', () => {
        // given
        const a = 'P';
        const n = 13;
        const specialForce = new CombatUnit('Bravo 0-6');
        // when
        specialForce.assault(a, n);
        // then
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining(a));
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining(n.toString()));
    });

    it('should work correctly on CombatUnit.defend', () => {
        // given
        const a = 'P';
        const n = 13;
        const specialForce = new CombatUnit('Bravo 0-6');
        // when
        specialForce.defend(a, n);
        // then
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining(a));
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining(n.toString()));
    });

    it('should work correctly on CombatUnit.reconnoiter', () => {
        // given
        const a = 'P';
        const n = 13;
        const specialForce = new CombatUnit('Bravo 0-6');
        // when
        specialForce.reconnoiter(a, n);
        // then
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining(a));
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining(n.toString()));
    });
});