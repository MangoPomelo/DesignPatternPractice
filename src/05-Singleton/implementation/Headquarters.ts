export class Headquarters {
    private static instance: Headquarters;
    static getInstance(): Headquarters {
        if (Headquarters.instance !== undefined) {
            return Headquarters.instance;
        }
        Headquarters.instance = new Headquarters();
        return Headquarters.instance;
    }

    private constructor() {
        console.log("📡: Airstrike is online...");
    }

    callInAirstrike(coordinateX: number, coordinateY: number): void {
        console.log(`🛩️: Commencing an airstrike on (${coordinateX}, ${coordinateY})...`);
    }

}