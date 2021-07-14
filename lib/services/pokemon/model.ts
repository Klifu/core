import { pokemonListSlice } from './slices';
import { fetchPokemons } from '../../fetcher';

export class Pokemons {
	static async list() {
		const { data, error } = await fetchPokemons();
		if (error) throw error;
		return pokemonListSlice(data);
	}
}