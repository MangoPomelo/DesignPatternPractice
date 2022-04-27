import { Squadron, TACP } from "./implementation/AirSupport";

export function main(): void {
    const squadron = new Squadron('Nobleman');
    const tacp = new TACP('Ybarra', squadron);
    tacp.attack('Q', 7);
}