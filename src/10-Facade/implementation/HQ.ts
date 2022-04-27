import { CombatUnit } from "./CombatUnit";


export class HQ {
    assaultForces: CombatUnit[];
    specialForces: CombatUnit[];
    airForces: CombatUnit[];
    armoredForces: CombatUnit[];
    constructor() {
        this.assaultForces = [];
        this.specialForces = [];
        this.airForces = [];
        this.armoredForces = [];
    }

    recruitAssaultForce(cu: CombatUnit): void {
        this.assaultForces = [...this.assaultForces, cu];
    }
    recruitSpecialForce(cu: CombatUnit): void {
        this.specialForces = [...this.specialForces, cu];
    }
    recruitAirForce(cu: CombatUnit): void {
        this.airForces = [...this.airForces, cu];
    }
    recruitArmoredForce(cu: CombatUnit): void {
        this.armoredForces = [...this.armoredForces, cu];
    }

    capture(alphabeticCoordinate: string, numericalCoordinate: number) : void {
        const totalForcesCount = 
            this.assaultForces.length + this.specialForces.length + 
            this.armoredForces.length + this.airForces.length;
        if (totalForcesCount <= 0) {
            console.log("Insufficient combat unit");
            return;
        }

        // send special forces to reconnoiter first
        for (let specialForce of this.specialForces) {
            specialForce.reconnoiter(alphabeticCoordinate, numericalCoordinate);
        }
        // bomb the area
        for (let airForce of this.airForces) {
            airForce.assault(alphabeticCoordinate, numericalCoordinate);
        }
        // then send armored to capture
        for (let armored of this.armoredForces) {
            armored.assault(alphabeticCoordinate, numericalCoordinate);
        }
        // afterwards, send infantries
        for (let infantry of this.assaultForces) {
            infantry.assault(alphabeticCoordinate, numericalCoordinate);
        }
        // defend lastly
        for (let infantry of this.assaultForces) {
            infantry.defend(alphabeticCoordinate, numericalCoordinate);
        }
    }
}