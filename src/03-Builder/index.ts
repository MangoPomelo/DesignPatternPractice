import { SniperKitBuilder, BreachManKitBuilder } from './implementation/Builder';
import { Quartermaster } from './implementation/Quartermaster';


export function main(): void {
    const sniperQuartermaster = new Quartermaster(new SniperKitBuilder());
    const sniperKitForFrontline = sniperQuartermaster.provideForFrontlineSoldier();
    sniperKitForFrontline.showMeWhatYouGot();
};