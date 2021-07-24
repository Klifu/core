import { RandomeGenerator } from '../rng';
import { IV, Rarity } from '../../models';

let randomGenerator: RandomeGenerator;

describe('RandomGenerator', () => {
	beforeAll(() => {
		randomGenerator = new RandomeGenerator();
	});

	it('should generate random IV', () => {
		const iv: IV = randomGenerator.IV();
		expect(iv.attack).toBeLessThanOrEqual(16);
	})

	it('Should return random rarity', () => {
		const rarity: Rarity = randomGenerator.rarity();
		expect(rarity).toBeTruthy();
	})

	it('should return random level', () => {
		const level: number = randomGenerator.level(4);
		expect(level).toBeLessThanOrEqual(6);
	})
})
