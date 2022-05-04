import { Originator } from "./Originator";
import { Memento } from "./Memento";
import { Caretaker } from "./Caretaker";

const DummyMemento = jest.fn() as jest.Mock<Memento>;
const StubOriginator = jest.fn(() => ({
    save: jest.fn().mockReturnValue(new DummyMemento()),
    restore: jest.fn()
})) as jest.Mock<Originator>;


describe('test on Caretaker', () => {
    it('should backup correctly', () => {
        // given
        const originator = new StubOriginator();
        const caretaker = new Caretaker(originator);

        // when
        caretaker.backup();

        // then
        expect(originator.save).toHaveBeenCalledTimes(1);
    });

    it.only('should backup and undo correctly', () => {
        // given
        const originator = new StubOriginator();
        const caretaker = new Caretaker(originator);

        // when
        caretaker.backup();
        caretaker.undo();

        // then
        expect(originator.save).toHaveBeenCalledTimes(1);
        expect(originator.restore).toHaveBeenCalledWith(expect.any(DummyMemento));
    });
});