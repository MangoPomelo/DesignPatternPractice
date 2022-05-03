import { CombatMap } from './CombatMap';


function createWakeIslandCombatMap(): CombatMap {
    return new CombatMap(
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
}


describe('test on Iterator', () => {
    let wakeIsland = createWakeIslandCombatMap();
    beforeEach(() => {
        wakeIsland = createWakeIslandCombatMap();
    });

    describe('test on AttackingIterator', () => {
        it('should give true when invoke Iterator.hasMore() with intact aggregate', () => {
            // given
            const attackingIterator = wakeIsland.createAttackingIterator();
            // when
            const result = attackingIterator.hasMore();
            // then
            expect(result).toBe(true);
        });

        it('should give true when invoke Iterator.hasMore() with iterated aggregate', () => {
            // given
            const attackingIterator = wakeIsland.createAttackingIterator();
            const length = wakeIsland.getFlags().length;
            // when
            for (let i = 0; i < length; i++) {
                attackingIterator.getNext();
            }
            // then
            expect(attackingIterator.hasMore()).toBe(false);
        });

        it('should give flags rather than <done> in the process of iterating', () => {
            // given
            const attackingIterator = wakeIsland.createAttackingIterator();
            const length = wakeIsland.getFlags().length;
            const process = [];
            // when
            for (let i = 0; i < length; i++) {
                process.push(attackingIterator.getNext());
            }
            // then
            process.every(r => expect(r).not.toBe('<done>'))
        });

        it('should give flags without duplications', () => {
            // given
            const attackingIterator = wakeIsland.createAttackingIterator();
            const length = wakeIsland.getFlags().length;
            const process = [];
            // when
            for (let i = 0; i < length; i++) {
                process.push(attackingIterator.getNext());
            }
            // then
            expect(process.length).toBe(new Set(process).size);
        });
    });

    describe('test on DefendingIterator', () => {
        it('should give true when invoke Iterator.hasMore() with intact aggregate', () => {
            // given
            const attackingIterator = wakeIsland.createDefendingIterator();
            // when
            const result = attackingIterator.hasMore();
            // then
            expect(result).toBe(true);
        });

        it('should give true when invoke Iterator.hasMore() with iterated aggregate', () => {
            // given
            const attackingIterator = wakeIsland.createDefendingIterator();
            const length = wakeIsland.getFlags().length;
            // when
            for (let i = 0; i < length; i++) {
                attackingIterator.getNext();
            }
            // then
            expect(attackingIterator.hasMore()).toBe(false);
        });

        it('should give flags rather than <done> in the process of iterating', () => {
            // given
            const attackingIterator = wakeIsland.createDefendingIterator();
            const length = wakeIsland.getFlags().length;
            const process = [];
            // when
            for (let i = 0; i < length; i++) {
                process.push(attackingIterator.getNext());
            }
            // then
            process.every(r => expect(r).not.toBe('<done>'))
        });

        it('should give flags without duplications', () => {
            // given
            const attackingIterator = wakeIsland.createDefendingIterator();
            const length = wakeIsland.getFlags().length;
            const process = [];
            // when
            for (let i = 0; i < length; i++) {
                process.push(attackingIterator.getNext());
            }
            // then
            expect(process.length).toBe(new Set(process).size);
        });
    });
});