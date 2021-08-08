import { fetchPokemons } from "../fetcher";
import { PokemonBase } from "../models";
import { Pokedex } from './pokedex';

interface Config {
	pokemonList: PokemonBase[]
}

class Klifu {
	private _pokemonList: PokemonBase[]

	constructor(pokemonList: PokemonBase[]) {
		this._pokemonList = pokemonList;
	}

	pokedex() {
		return new Pokedex(this._pokemonList);
	}

	static async load(config?: Config) {
		if (config?.pokemonList) {
			return new Klifu(config.pokemonList);
		}

		const { data, error } = await fetchPokemons();
		if (error) throw error;
		return new Klifu(data as PokemonBase[]);
	}
}