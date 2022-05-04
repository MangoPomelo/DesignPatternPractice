import { ConcreteMemento } from "./Memento";


const fakeDate = new Date(0);
jest.useFakeTimers().setSystemTime(fakeDate);
const fakeDateString = fakeDate.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' });

describe('test on Memento', () => {
    it('should be created with correct data', () => {
        // given
        const index = 0;
        const memento = new ConcreteMemento(index);
        // when
        const dateString = memento.getDate();
        const returnedIndex = memento.getCurrentIndex();
        // then
        expect(dateString).toEqual(fakeDateString);
        expect(returnedIndex).toBe(index);
    });
});