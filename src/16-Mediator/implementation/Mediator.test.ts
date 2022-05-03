import { Squad } from "./Squad";
import { Commander } from './Mediator';


console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});

describe('test on Mediator', () => {
    it('should handle <recon> request correctly', () => {
        // given
        const type = '<recon>';
        const location = 'Lima';
        const squad = new Squad('Ghosts', location);
        const commander = new Commander(squad, squad, squad);
        squad.setRadio(commander);
        // when
        jest.spyOn(squad, 'moveTo');
        commander.handleRequest(squad, type);
        // then
        expect(squad.moveTo).toHaveBeenCalledWith(location);
    });

    it('should handle <assault> request correctly', () => {
        // given
        const type = '<assault>';
        const location = 'Lima';
        const squad = new Squad('Ghosts', location);
        const commander = new Commander(squad, squad, squad);
        squad.setRadio(commander);
        // when
        jest.spyOn(squad, 'moveTo');
        commander.handleRequest(squad, type);
        // then
        expect(squad.moveTo).toHaveBeenCalledWith(location);
    });

    it('should handle <support> request correctly', () => {
        // given
        const type = '<support>';
        const location = 'Lima';
        const squad = new Squad('Ghosts', location);
        const commander = new Commander(squad, squad, squad);
        squad.setRadio(commander);
        // when
        jest.spyOn(squad, 'moveTo');
        commander.handleRequest(squad, type);
        // then
        expect(squad.moveTo).toHaveBeenCalledWith(location);
    });
});