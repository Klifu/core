import { pokemonListSlice } from './slices';
import { fetchPokemons } from '../../fetcher';
import { generateRedux } from '../../utils';

export class Pokemons {
	static async list() {
		const { data, error } = await fetchPokemons();
		if (error) throw error;
		return generateRedux(pokemonListSlice(data));
	}
}