import { PokemonBase } from './models';
import { fetchPokemons } from './util/fetcher';

export class Cache {
	static async pokemons(): Promise<Array<PokemonBase>> {
		const { data, error } = await fetchPokemons()
		if (error) throw error;
		return data as Array<PokemonBase>
	}
}