import { fetchPokemons } from '../fetcher';
import { PokemonBase, PokemonType, Rarity } from '../types';
import _ from 'lodash';

export class PokemonService {
	private readonly _pokemons: PokemonBase[];

	constructor(pokemons: PokemonBase[]) {
		this._pokemons = pokemons;
	}

	get pokemons() {
		return this._pokemons;
	}

	where() {
		return {
			name: (name: string) => _.find(this._pokemons, pokemon => pokemon.name === name),
			id: (id: number) => _.find(this._pokemons, pokemon => pokemon.id === id),
			rarity: (rarity: Rarity) => _.filter(this.pokemons, pokemon => pokemon.rarity === rarity),
			type: (type: PokemonType) => _.filter(this._pokemons, pokemon => pokemon.type.includes(type))
		}
	}

	ofRarity(rarity: Rarity): PokemonBase[] {
		return _.filter(this._pokemons, pokemon => pokemon.rarity === rarity);
	}

	static async load() {
		const { data, error } = await fetchPokemons();
		if (error) throw error;
		return new PokemonService(data as PokemonBase[]);
	}
}