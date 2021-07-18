import { IV } from '../../pokemon';
import { RandomService } from '../rng.service';

describe('Random service should ', () => {
	it('return generated random IVs', () => {
		let IV: IV = RandomService.generateIV();
		expect(IV.attack).toBeLessThan(16);
		expect(IV.defense).toBeLessThan(16);
		expect(IV.hp).toBeLessThan(16);
	})
})
