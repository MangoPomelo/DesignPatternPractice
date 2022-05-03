import { AttackingIterator, DefendingIterator, Iterator } from './Iterator';

export interface IterableMap {
    createAttackingIterator(): Iterator;
    createDefendingIterator(): Iterator;
}

export class CombatMap implements IterableMap {
    private _flags: string[];
    private _transitionMatrix: boolean[][];
    private _attackerBase: string;
    private _defenderBase: string;
    constructor(flags: string[], transitionMatrix: boolean[][], attackerBase: string, defenderBase: string) {
        this._flags = flags;
        this._transitionMatrix = transitionMatrix;
        this._attackerBase = attackerBase;
        this._defenderBase = defenderBase;
    }
    getFlags(): string[] {
        return this._flags;
    }
    getNeighborFlags(flag: string): string[] {
        const currentFlagIndex = this._flags.indexOf(flag);
        if (currentFlagIndex < 0) {
            return [];
        }

        const transitionRow = this._transitionMatrix[currentFlagIndex];
        const neighborFlagIndices = transitionRow.map((v, idx) => v === true ? idx: -1).filter(v => v >= 0);
        return neighborFlagIndices.map(idx => this._flags[idx]);
    }
    getAttackerBase(): string {
        return this._attackerBase;
    }
    getDefenderBase(): string {
        return this._defenderBase;
    }

    createAttackingIterator(): Iterator {
        return new AttackingIterator(this);
    }
    createDefendingIterator(): Iterator {
        return new DefendingIterator(this);
    }
}