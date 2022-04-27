import { Headquarters } from "./implementation/Headquarters";


export function main(): void {
    const HQ = Headquarters.getInstance();
    HQ.callInAirstrike(10, 10);
};