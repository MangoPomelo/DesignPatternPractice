import { Headquarters } from "./implementation/Headquarters";


export const main = (): void => {
    const HQ = Headquarters.getInstance();
    HQ.callInAirstrike(10, 10);
};