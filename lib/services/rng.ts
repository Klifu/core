import random from 'random';
import { IV, Rarity } from '../models';

export class RandomeGenerator {
	IV(): IV {
		return {
			attack: random.int(1, 16),
			defense: random.int(1, 16),
			hp: random.int(1, 16)
		} as IV
	}

	rarity(): Rarity {
		return this._rarityTable(random.int(1, 100));
	}

	pokemonindex(length: number): number {
		return random.int(0, length);
	}

	level(userLevel: number) {
		return random.int(1, userLevel + 2);
	}

	private _rarityTable(identifier: number): Rarity {
		if (identifier > 60 && identifier <= 80) return 'R';
		if (identifier > 80 && identifier <= 92) return 'SR';
		if (identifier > 92 && identifier <= 98) return 'UR';
		if (identifier > 98 && identifier <= 100) return 'L';
		return 'C';
	}
}