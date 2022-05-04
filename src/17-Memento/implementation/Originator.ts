import { ConcreteMemento, Memento } from "./Memento";


export interface Originator {
    save(): Memento;
    restore(m: Memento): void;
}

export class MissionBriefing implements Originator {
    private _subMissions: string[];
    private _currentIndex: number;
    constructor(subMissions: string[]) {
        this._subMissions = subMissions;
        this._currentIndex = 0;
    }
    isDone(): boolean {
        return this._subMissions[this._currentIndex] === undefined;
    }
    commenceCurrentStep(): void {
        if (this.isDone()) {
            return;
        }

        const currentStep = this._subMissions[this._currentIndex];
        this._currentIndex += 1;

        console.log(`Commencing Submission: ${currentStep}`);
    }
    save(): Memento {
        return new ConcreteMemento(this._currentIndex);
    }
    restore(m: Memento): void {
        this._currentIndex = m.getCurrentIndex();
    }
}