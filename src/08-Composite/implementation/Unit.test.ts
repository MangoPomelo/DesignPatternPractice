import { Soldier, Troop } from "./Unit";


console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});

describe('test on Soldier', () => {
    it('should commence the operation', () => {
        // given
        const bob = new Soldier('bob');
        // when
        bob.commence('harvest');
        // then
        expect(console.log).toHaveBeenCalledTimes(1);
    });
});

describe('test on Troop', () => {
    it('should work functionally when adding new soldiers', () => {
        // given
        const taskForce141 = new Troop('task force 141');
        // when
        taskForce141.add(new Soldier('Price'));
        taskForce141.add(new Soldier('Soap'));
        taskForce141.add(new Soldier('Ghost'));
        taskForce141.add(new Soldier('Roach'));
        // then
        expect(taskForce141.getUnits().length).toBe(4);
    });

    it('should work functionally when removing a soldier', () => {
        // given
        const mother = new Soldier('Mother');
        const preacher = new Soldier('Preacher');
        const voodoo = new Soldier('Voodoo');
        const rabbit = new Soldier('Rabbit'); 
        const neptune = new Troop('afo team neptune');
        neptune.add(mother);
        neptune.add(preacher);
        neptune.add(voodoo);
        neptune.add(rabbit);
        // when
        neptune.remove(rabbit);
        // then
        expect(neptune.getUnits().length).toBe(3);
    });

    it('should work functionally when commencing operation', () => {
        // given
        const MockedSoldier = jest.fn().mockImplementation((name) => ({
            name: name,
            commence: jest.fn()
        })) as jest.Mock<Soldier>;
        const price = new MockedSoldier('Price');
        const soap = new MockedSoldier('Soap');
        const ghost = new MockedSoldier('Ghost');
        const roach = new MockedSoldier('Roach');
        const taskForce141 = new Troop('task force 141');
        // when
        taskForce141.add(price);
        taskForce141.add(soap);
        taskForce141.add(ghost);
        taskForce141.add(roach);
        taskForce141.commence('kingfish');
        // then
        expect(price.commence).toHaveBeenCalledTimes(1);
        expect(soap.commence).toHaveBeenCalledTimes(1);
        expect(ghost.commence).toHaveBeenCalledTimes(1);
        expect(roach.commence).toHaveBeenCalledTimes(1);
    });

    it('should work functionally when commencing operation given a nested circumstance', () => {
        // given
        const MockedSoldier = jest.fn().mockImplementation((name) => ({
            name: name,
            commence: jest.fn()
        })) as jest.Mock<Soldier>;
        const panther = new MockedSoldier('Panther');
        const vegas = new MockedSoldier('Vegas');
        const dusty = new MockedSoldier('Dusty');
        const deuce = new MockedSoldier('Deuce');
        const wolfpack = new Troop('afo team wolfpack');
        wolfpack.add(panther);
        wolfpack.add(vegas);
        wolfpack.add(dusty);
        wolfpack.add(deuce);
        const mother = new MockedSoldier('Mother');
        const preacher = new MockedSoldier('Preacher');
        const voodoo = new MockedSoldier('Voodoo');
        const rabbit = new MockedSoldier('Rabbit'); 
        const neptune = new Troop('afo team neptune');
        neptune.add(mother);
        neptune.add(preacher);
        neptune.add(voodoo);
        neptune.add(rabbit);
        const afo = new Troop('advanced force operation teams');
        afo.add(wolfpack);
        afo.add(neptune);
        // when
        afo.commence('rescue attempt');
        // then
        expect(panther.commence).toHaveBeenCalledTimes(1);
        expect(vegas.commence).toHaveBeenCalledTimes(1);
        expect(dusty.commence).toHaveBeenCalledTimes(1);
        expect(deuce.commence).toHaveBeenCalledTimes(1);
        expect(mother.commence).toHaveBeenCalledTimes(1);
        expect(preacher.commence).toHaveBeenCalledTimes(1);
        expect(voodoo.commence).toHaveBeenCalledTimes(1);
        expect(rabbit.commence).toHaveBeenCalledTimes(1);
    });
});