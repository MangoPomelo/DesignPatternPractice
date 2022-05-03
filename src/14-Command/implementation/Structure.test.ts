import { Gate } from './Structure';


describe('test on Structure', () => {
    describe('test on Gate', () => {
        it('should be destroyed when state is 0', () => {
            // given
            const initState = 0;
            const gate = new Gate('the South Gate', initState);
            // when
            const isDestroyed = gate.isDestroyed();
            // then
            expect(isDestroyed).toBe(true);
        });

        it('should not be destroyed when state is greater than 0', () => {
            // given
            const initState = 1;
            const gate = new Gate('the South Gate', initState);
            // when
            const isDestroyed = gate.isDestroyed();
            // then
            expect(isDestroyed).toBe(false);
        });

        it('should have different state when damage too badly', () => {
            // given
            // given
            const initState = 1;
            const gate = new Gate('the South Gate', initState);
            // when
            const before = gate.isDestroyed();
            gate.damage(100);
            const after = gate.isDestroyed();
            // then
            expect(before).toBe(false);
            expect(after).toBe(true);
        });
    });
});