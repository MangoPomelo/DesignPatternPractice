import { CounterTerrorist, PlayerFlyweight, Terrorist } from './Player';


console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});

describe('test on PlayerFlyweight', () => {
    it('should work correctly', () => {
        // given
        const task = 'plant a bomb';
        const texture = 'Arctic Avengers';
        // when
        const flyweight = new PlayerFlyweight(task, texture);
        // then
        expect(flyweight.getTexture()).toBe(texture);
        expect(flyweight.getTask()).toBe(task);
    });
});

describe('test on Player', () => {
    const MockedFlyweight = jest.fn().mockImplementation((task, texture) => ({
        getTexture: jest.fn().mockReturnValue(texture),
        getTask: jest.fn().mockReturnValue(task)
    })) as jest.Mock<PlayerFlyweight>;

    describe('test on Terrorist', () => {
        it('should work correctly when displaying mission', () => {
            // given
            const weapon = 'AK47';
            const hp = 100;
            const task = 'plant a bomb';
            const texture = 'Arctic Avengers';
            const mockedFlyweight = new MockedFlyweight(task, texture);
            const terrorist = new Terrorist(weapon, hp, mockedFlyweight);
            // when
            terrorist.displayMission();
            // then
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(weapon));
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(hp.toString()));
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(task));
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(texture));
        });
    
        it('should work correctly after assigning new weapon', () => {
            // given
            const newWeapon = 'SG552';
            const hp = 100;
            const task = 'plant a bomb';
            const texture = 'Arctic Avengers';
            const mockedFlyweight = new MockedFlyweight(task, texture);
            const terrorist = new Terrorist('AK47', hp, mockedFlyweight);
            // when
            terrorist.assignWeapon(newWeapon);
            terrorist.displayMission();
            // then
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(newWeapon));
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(hp.toString()));
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(task));
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(texture));
        });
    
        it('should work correctly after setting new hp', () => {
            // given
            const weapon = 'SG552';
            const hp = 12;
            const task = 'plant a bomb';
            const texture = 'Arctic Avengers';
            const mockedFlyweight = new MockedFlyweight(task, texture);
            const terrorist = new Terrorist(weapon, 100, mockedFlyweight);
            // when
            terrorist.setHP(hp);
            terrorist.displayMission();
            // then
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(weapon));
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(hp.toString()));
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(task));
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(texture));
        });
    });

    describe('test on CounterTerrorist', () => {
        it('should work correctly when displaying mission', () => {
            // given
            const weapon = 'M4A1';
            const hp = 100;
            const task = 'diffuse the bomb';
            const texture = 'SAS';
            const mockedFlyweight = new MockedFlyweight(task, texture);
            const counterTerrorist = new CounterTerrorist(weapon, hp, mockedFlyweight);
            // when
            counterTerrorist.displayMission();
            // then
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(weapon));
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(hp.toString()));
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(task));
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(texture));
        });
    
        it('should work correctly after assigning new weapon', () => {
            // given
            const newWeapon = 'AUG';
            const hp = 100;
            const task = 'diffuse the bomb';
            const texture = 'SAS';
            const mockedFlyweight = new MockedFlyweight(task, texture);
            const counterTerrorist = new CounterTerrorist('M4A1', hp, mockedFlyweight);
            // when
            counterTerrorist.assignWeapon(newWeapon);
            counterTerrorist.displayMission();
            // then
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(newWeapon));
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(hp.toString()));
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(task));
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(texture));
        });
    
        it('should work correctly after setting new hp', () => {
            // given
            const weapon = 'AUG';
            const hp = 12;
            const task = 'diffuse the bomb';
            const texture = 'SAS';
            const mockedFlyweight = new MockedFlyweight(task, texture);
            const counterTerrorist = new CounterTerrorist(weapon, 100, mockedFlyweight);
            // when
            counterTerrorist.setHP(hp);
            counterTerrorist.displayMission();
            // then
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(weapon));
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(hp.toString()));
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(task));
            expect(console.log).toHaveBeenCalledWith(expect.stringContaining(texture));
        });
    });
});