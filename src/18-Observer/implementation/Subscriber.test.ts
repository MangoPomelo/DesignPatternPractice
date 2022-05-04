import { Agent } from './Subscriber';


console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});

describe('test on Agent', () => {
    it('should update location correctly', () => {
        // given
        const codeName = 'Spade';
        const oldLocation = 'Tokyo';
        const newLocation = 'Shanghai';
        const agent = new Agent(codeName, oldLocation);
        // when
        agent.update(newLocation);
        agent.reportStatus();
        // then
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining(codeName));
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining(newLocation));
    });
});