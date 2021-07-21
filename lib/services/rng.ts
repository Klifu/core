import random from 'random';
import { IV, Pokemon, Rarity } from '../types';
import { PokemonService } from './pokemon';
import { StatService } from './stat';

export class RandomeGenerator {
	IV(): IV {
		return {
			attack: random.int(1, 16),
			defense: random.int(1, 16),
			hp: random.int(1, 16)
		} as IV
	}

	generatePokemon(pokemonService: PokemonService, userLevel: number): Pokemon {
		const rarityIdentifier = random.int(1, 100);
		const rarity = this._rarityTable(rarityIdentifier);
		const rarePokemons = pokemonService.where().rarity(rarity);
		const pokemon = rarePokemons[random.int(0, rarePokemons.length)];
		const generatedIV = this.IV();
		const generatedLevel = random.int(1, userLevel + 2);
		const statService = new StatService(pokemon.baseStat, generatedIV, generatedLevel);

		let generatedPokemon: Pokemon = {
			id: pokemon.id,
			name: pokemon.name,
			type: pokemon.type,
			rarity: pokemon.rarity,
			sprite: pokemon.sprite,
			baseStat: pokemon.baseStat,
			stat: {
				attack: statService.getAttack(),
				defense: statService.getDefense(),
				hp: statService.getHP(),
				iv: generatedIV,
				level: generatedLevel
			},
			cp: statService.getCP()
		}

		return generatedPokemon;
	}

	private _rarityTable(identifier: number): Rarity {
		if (identifier > 60 && identifier <= 80) return 'R';
		if (identifier > 80 && identifier <= 92) return 'SR';
		if (identifier > 92 && identifier <= 98) return 'UR';
		if (identifier > 98 && identifier <= 100) return 'L';
		return 'C';
	}
}