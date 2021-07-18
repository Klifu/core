import random from 'random';
import { IV } from '../pokemon';

export class RandomService {
	static generateIV() {
		const attack = random.int(1, 16);
		const defense = random.int(1, 16);
		const hp = random.int(1, 16);

		return { attack, defense, hp } as IV;
	}
}