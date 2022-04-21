export class Kit {
    private _headwears: string[];
    private _bodygears: string[];
    private _onHand: string[];
    private _packed: string[];
    constructor() {
        this._headwears = [];
        this._bodygears = [];
        this._onHand = [];
        this._packed = [];
    }

    addHeadwear(equipmentName: string): void {
        this._headwears = [...this._headwears, equipmentName];
    }
    addBodygear(equipmentName: string): void {
        this._bodygears = [...this._bodygears, equipmentName];
    }
    addOnHand(equipmentName: string): void {
        this._onHand = [...this._onHand, equipmentName];
    }
    addPacked(equipmentName: string): void {
        this._packed = [...this._packed, equipmentName];
    }

    showMeWhatYouGot() {
        console.log('🪖 Headwears:', this._headwears);
        console.log('🦺 Bodygears:', this._bodygears);
        console.log('🧤 OnHand:', this._onHand);
        console.log('🎒 Packed:', this._packed);
        return this;
    }
}