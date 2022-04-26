import { CombatUnit } from './CombatUnit';
import { HQ } from './HQ';


jest.mock('./CombatUnit');
console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});

describe('test on HQ', () => {
    it('should work correctly recruiting assault forces', () => {
        // given
        const hq = new HQ();
        // when
        hq.recruitAssaultForce(new CombatUnit('Ranger'));
        // then
        expect(hq.assaultForces.length).toEqual(1);
    });

    it('should work correctly recruiting special forces', () => {
        // given
        const hq = new HQ();
        // when
        hq.recruitSpecialForce(new CombatUnit('Delta'));
        // then
        expect(hq.specialForces.length).toEqual(1);
    });

    it('should work correctly recruiting air forces', () => {
        // given
        const hq = new HQ();
        // when
        hq.recruitAirForce(new CombatUnit('Warthog'));
        // then
        expect(hq.airForces.length).toEqual(1);
    });

    it('should work correctly recruiting armored forces', () => {
        // given
        const hq = new HQ();
        // when
        hq.recruitArmoredForce(new CombatUnit('Stryker'));
        // then
        expect(hq.armoredForces.length).toEqual(1);
    });

    it('should work correctly on capturing a flag given fully functional forces', () => {
        // given
        const hq = new HQ();
        const assaultForce = new CombatUnit('Ranger');
        const specialForce = new CombatUnit('Delta');
        const airForce = new CombatUnit('Warthog');
        const armoredForce = new CombatUnit('Stryker');
        hq.recruitAssaultForce(assaultForce);
        hq.recruitSpecialForce(specialForce);
        hq.recruitAirForce(airForce);
        hq.recruitArmoredForce(armoredForce);
        // when
        hq.capture('A', 16);
        // then
        expect(specialForce.reconnoiter).toHaveBeenCalledTimes(1);
        expect(airForce.assault).toHaveBeenCalledTimes(1);
        expect(armoredForce.assault).toHaveBeenCalledTimes(1);
        expect(assaultForce.assault).toHaveBeenCalledTimes(1);
        expect(assaultForce.defend).toHaveBeenCalledTimes(1);
    });

    it('should work correctly on capturing a flag given scanty forces', () => {
        // given
        const hq = new HQ();
        // when
        hq.capture('A', 16);
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
    });
});