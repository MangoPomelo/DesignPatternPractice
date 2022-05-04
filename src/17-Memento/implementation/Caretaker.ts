import { Memento } from "./Memento";
import { Originator } from "./Originator";

export class Caretaker {
    private _mementoList: Memento[];
    private _originator: Originator;
    constructor(originator: Originator) {
        this._originator = originator;
        this._mementoList = [];
    }
    backup(): void{
        const memento = this._originator.save();
        this._mementoList.push(memento);
    }
    undo(): void {
        const memento = this._mementoList.pop();
        if (memento === undefined) {
            return;
        }

        this._originator.restore(memento);
    }
}