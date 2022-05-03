import { CombatMap } from './CombatMap';


describe('test on CombatMap', () => {
    it('should gives right neighbors', () => {
        // given
        const wakeIsland = new CombatMap(
            ['US Carrier', 'South Base', 'Beach', 'North Village', 'North Base', 'Airfield Base'],
            [
                [false, true, false, true, false, false],
                [true, false, true, false, false, false],
                [false, true, false, false, false, true],
                [true, false, false, false, true, false],
                [false, false, false, true, false, true],
                [false, false, true, false, true, false]
            ],
            'US Carrier',
            'Airfield Base'
        );
        // then
        expect(wakeIsland.getNeighborFlags('US Carrier')).toEqual(['South Base', 'North Village']);
        expect(wakeIsland.getNeighborFlags('South Base')).toEqual(['US Carrier', 'Beach']);
        expect(wakeIsland.getNeighborFlags('Beach')).toEqual(['South Base', 'Airfield Base']);
        expect(wakeIsland.getNeighborFlags('North Village')).toEqual(['US Carrier', 'North Base']);
        expect(wakeIsland.getNeighborFlags('North Base')).toEqual(['North Village', 'Airfield Base']);
        expect(wakeIsland.getNeighborFlags('Airfield Base')).toEqual(['Beach', 'North Base']);
    });
});