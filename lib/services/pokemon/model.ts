import { pokemonListSlice } from './slices';
import { fetchPokemons } from '../../fetcher';
import { generateRedux } from '../../utils';
import { PokemonBase } from './types';

export class PokemonService {
	private readonly _pokemons: PokemonBase[];
	constructor(pokemons: PokemonBase[]) {
		this._pokemons = pokemons;
	}

	public list() {
		return generateRedux(pokemonListSlice(this._pokemons));
	}

	static async fetch() {
		const { data, error } = await fetchPokemons();
		if (error) throw error;
		return new PokemonService(data as PokemonBase[]);
	}
}

export class Pokemons {
	static async list() {
		const { data, error } = await fetchPokemons();
		if (error) throw error;
		return generateRedux(pokemonListSlice(data));
	}
}