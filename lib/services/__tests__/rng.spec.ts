import { IV } from '../../types';
import { RandomeGenerator } from '../rng';

const generator = new RandomeGenerator();

describe('RandomGenerator.IV should', () => {
	it('return random IV', () => {
		let iv: IV = generator.IV();
		expect(iv).toBeDefined();
	})
})
