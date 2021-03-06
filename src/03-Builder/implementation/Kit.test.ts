import { Kit } from './Kit';


console.log = jest.fn();
afterEach(() => {
    jest.clearAllMocks();
});

describe('test on Kit', () => {
    it('should print right content given a bundle of equipments', () => {
        // given
        const kit = new Kit();
        kit.addHeadwear('beer hat');
        kit.addHeadwear('mask');
        kit.addBodygear('anti-war T-shirt');
        kit.addOnHand('tactical gloves');
        kit.addPacked('baseball bat');
        kit.showMeWhatYouGot();
        // then
        expect(console.log).toHaveBeenCalledTimes(4);
        expect(console.log).toHaveBeenCalledWith("๐ช Headwears:", ['beer hat', 'mask']);
        expect(console.log).toHaveBeenCalledWith("๐ฆบ Bodygears:", ['anti-war T-shirt']);
        expect(console.log).toHaveBeenCalledWith("๐งค OnHand:", ['tactical gloves']);
        expect(console.log).toHaveBeenCalledWith("๐ Packed:", ['baseball bat']);
    });
});