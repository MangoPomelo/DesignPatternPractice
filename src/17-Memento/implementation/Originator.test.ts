import { MissionBriefing } from "./Originator";
import { ConcreteMemento } from "./Memento";


jest.mock('./Memento');

console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});

describe('test on Originator', () => {
    const subMissions = [
        '1. Move to Alpha',
        '2. Move to Bravo',
        '3. Move to Charlie',
        '4. Move to Delta',
        '5. Move to Echo'
    ];

    it('should work correctly', () => {
        // given
        const missionBrief = new MissionBriefing(subMissions);
        // when
        while(!missionBrief.isDone()) {
            missionBrief.commenceCurrentStep();    
        }
        // then
        expect(console.log).toHaveBeenCalledTimes(subMissions.length);
    });

    it('should save correctly', () => {
        // given
        const missionBrief = new MissionBriefing(subMissions);
        // when
        while(!missionBrief.isDone()) {
            missionBrief.save();
            missionBrief.commenceCurrentStep();
        }
        // then
        expect(ConcreteMemento).toHaveBeenCalledTimes(subMissions.length);
        for (let idx = 0; idx < subMissions.length; idx++) {
            const ordinal = idx + 1;
            expect(ConcreteMemento).toHaveBeenNthCalledWith(ordinal, idx);
        }
    });

    it('should restore correctly', () => {
        // given
        const fakeIdx = 3;
        const fakeOrdinal = fakeIdx + 1;

        const MockMemento = jest.fn().mockImplementation((idx) => ({
            getCurrentIndex: jest.fn().mockReturnValue(idx)
        })) as jest.Mock<ConcreteMemento>;
        const mockMemento = new MockMemento(fakeIdx); 

        const missionBrief = new MissionBriefing(subMissions);
        // when
        missionBrief.restore(mockMemento);
        missionBrief.commenceCurrentStep();
        // then
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining(fakeOrdinal.toString()));
    });
});