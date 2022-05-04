import { MI6 } from './Publisher';
import { Subscriber } from './Subscriber';


const DummySubscriber = jest.fn() as jest.Mock<Subscriber>;
const MockedSubscriber = jest.fn().mockImplementation(() => ({
    update: jest.fn()
})) as jest.Mock<Subscriber>;

describe('test on Publisher', () => {
    it('should attach correctly', () => {
        // given
        const mi6 = new MI6('star');
        const dummy1 = new DummySubscriber();
        const dummy2 = new DummySubscriber();
        const dummy3 = new DummySubscriber();
        // when
        mi6.attach(dummy1);
        mi6.attach(dummy2);
        mi6.attach(dummy3);
        // then
        expect(mi6.getSubscribers().length).toBe(3);
    });

    it('should attach then detach correctly', () => {
        // given
        const mi6 = new MI6('star');
        const dummy1 = new DummySubscriber();
        const dummy2 = new DummySubscriber();
        const dummy3 = new DummySubscriber();
        // when
        mi6.attach(dummy1);
        mi6.attach(dummy2);
        mi6.attach(dummy3);
        mi6.detach(dummy1);
        mi6.detach(dummy2);
        mi6.detach(dummy3);
        // then
        expect(mi6.getSubscribers().length).toBe(0);
    });

    it('should notify correctly', () => {
        // given
        const mi6 = new MI6('star');
        const newLocation = 'London';
        const mocked = new MockedSubscriber();
        // when
        mi6.attach(mocked);
        mi6.notify(newLocation);
        // then
        expect(mocked.update).toHaveBeenCalledWith(newLocation);
    });
});