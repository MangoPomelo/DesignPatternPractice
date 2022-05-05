jest.mock('./Visitor');

import { MortarTeam } from "./Element";
import { AmmoTruck } from "./Visitor";


describe('test on Element', () => {
    describe('test on MortarTeam', () => {
        it('should work fine on MortarTeam.accept', () => {
            // given
            const truck = new AmmoTruck(100);
            const mortalTeam = new MortarTeam();
            // when
            mortalTeam.accept(truck);
            // then
            expect(truck.feedMortalShell).toHaveBeenCalledWith(mortalTeam);
        })
    });
});