jest.mock('./Element');
console.log = jest.fn();

import { MortarTeam, Sniper } from "./Element";
import { AmmoTruck } from "./Visitor";


describe('test on AmmoTruck', () => {
    const shells = 12;
    const mortalTeam = jest.mocked(new MortarTeam());
    mortalTeam.getShells.mockReturnValue(shells);
    it('should work correctly on AmmoTruck.feedMortalShell', () => {
        // given        
        const truck = new AmmoTruck(100);
        // when
        truck.feedMortalShell(mortalTeam);
        // then
        expect(mortalTeam.getShells).toHaveBeenCalledTimes(1);
        expect(mortalTeam.setShells).toHaveBeenCalledWith(shells + 1);
    });

    const ammo = 24;
    const sniper = jest.mocked(new Sniper());
    sniper.getAmmo.mockReturnValue(ammo);
    it('should work correctly on AmmoTruck.feedMortalShell', () => {
        // given        
        const truck = new AmmoTruck(100);
        // when
        truck.feedHighCaliberAmmo(sniper);
        // then
        expect(sniper.getAmmo).toHaveBeenCalledTimes(1);
        expect(sniper.setAmmo).toHaveBeenCalledWith(ammo + 1);
    });
});