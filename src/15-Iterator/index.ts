import { CombatMap, IterableMap } from "./implementation/CombatMap";

function createIterableMap(): IterableMap {
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

export function main(): void {
    const map = createIterableMap();
    const iterator = map.createAttackingIterator();
    while(iterator.hasMore()) {
        console.log(`Capturing: ${iterator.getNext()}`);
    }
}