import { Adapter, Cartridge556, Cartridge762 } from './implementation/Cartridge';


export function main(): void {
    const adaptedCartridge556 = new Adapter(new Cartridge556(24));
    const cartridge762 = new Cartridge762(36);
    const bullets = [adaptedCartridge556, cartridge762];
    for (const bullet of bullets) {
        bullet.fireHighCaliber();
    }
};