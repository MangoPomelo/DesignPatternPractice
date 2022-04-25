import { SergeantYork } from "./implementation/AntiAirUnit";
import { CommandSender } from "./implementation/CommandSender";


export function main(): void {
    const unit = new SergeantYork(100);
    const sender = new CommandSender(unit);
    sender.activate();
    sender.deactivate();
}