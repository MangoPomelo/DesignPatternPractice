export interface Memento {
    getCurrentIndex(): number;
    getDate(): string;
}

export class ConcreteMemento implements Memento {
    private _currentIndex: number;
    private _date: string;
    constructor(idx: number) {
        this._currentIndex = idx;
        this._date = new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' });
    }
    getCurrentIndex(): number {
        return this._currentIndex;
    }
    getDate(): string {
        return this._date;
    }
}