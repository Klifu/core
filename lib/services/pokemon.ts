import { fetchPokemons } from '../fetcher';
import { PokemonBase, ReduxResponseObject } from '../types';
import { generateRedux } from '../utils';
import { pokemonListSlice } from '../slices';

export class PokemonService {
	private readonly _pokemons: PokemonBase[];
	constructor(pokemons: PokemonBase[]) {
		this._pokemons = pokemons;
	}

	list(): ReduxResponseObject {
		return generateRedux(pokemonListSlice(this._pokemons));
	}

	static async load() {
		const { data, error } = await fetchPokemons();
		if (error) throw error;
		return new PokemonService(data as PokemonBase[]);
	}
}