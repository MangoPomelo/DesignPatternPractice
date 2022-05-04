import { MissionBriefing } from './implementation/Originator';
import { Caretaker } from './implementation/Caretaker';


export function main(): void {
    const subMissions = [
        '1. Move to Alpha',
        '2. Move to Bravo',
        '3. Move to Charlie',
        '4. Move to Delta',
        '5. Move to Echo'
    ];
    const originator = new MissionBriefing(subMissions);
    const caretaker = new Caretaker(originator);

    for (let idx = 0; idx < subMissions.length; idx++) {
        caretaker.backup();
        originator.commenceCurrentStep();
    }

    console.log('----------------------------------------------------------------');

    for (let idx = 0; idx < subMissions.length; idx++) {
        caretaker.undo();
        originator.commenceCurrentStep();
    }
}