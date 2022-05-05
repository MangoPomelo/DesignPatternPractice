import { FullMetalJacket, JacketedHollowPoint, JacketedSoftPoint } from "./implementation/Bullet";
import { Gun } from "./implementation/Gun";


export function main(): void {
    const fmj = new FullMetalJacket(12);
    const jhp = new JacketedHollowPoint(30);
    const jsp = new JacketedSoftPoint(25);

    const gun = new Gun(fmj);
    gun.shoot();

    gun.reload(jsp);
    gun.shoot();

    gun.reload(jhp);
    gun.shoot();
}