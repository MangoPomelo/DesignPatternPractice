import { Squad } from './Squad';
import { Mediator } from './Mediator';


jest.mock('./Mediator');
console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});

describe('test on Squad', () => {
    it('should request correctly', () => {
        // given
        const requestType = '<support>';
        const recon = new Squad('Ghosts', 'Bravo');
        const mockObj = { handleRequest: jest.fn() };
        const radioStation = mockObj as Mediator;
        recon.setRadio(radioStation);
        // when
        recon.request(requestType);
        // then
        expect(radioStation.handleRequest).toHaveBeenCalledWith(recon, requestType);
    });

    it('should move to right location', () => {
        // given
        const destination = 'Hotel';
        const recon = new Squad('Ghosts', 'Bravo');
        const mockObj = { handleRequest: jest.fn() };
        const radioStation = mockObj as Mediator;
        recon.setRadio(radioStation);
        // when
        recon.moveTo(destination);
        // then
        expect(recon.getCurrentLocation()).toBe(destination);
    });
});