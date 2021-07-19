import { fetchPokemons } from '../fetcher';
import { PokemonBase, Rarity, ReduxResponseObject } from '../types';
import { generateRedux } from '../utils';
import { pokemonListSlice } from '../slices';
import _ from 'lodash';

export class PokemonService {
	private readonly _pokemons: PokemonBase[];
	constructor(pokemons: PokemonBase[]) {
		this._pokemons = pokemons;
	}

	list(): ReduxResponseObject {
		return generateRedux(pokemonListSlice(this._pokemons));
	}

	catch(level: number) {

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