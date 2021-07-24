import { fetchPokemons } from '../fetcher';
import { PokemonBase, PokemonType, Rarity, Pokemon } from '../models';
import _ from 'lodash';
import { RandomeGenerator } from './rng';

export class PokemonService {
	private readonly _pokemons: PokemonBase[];
	private randomGenerator: RandomeGenerator;

	constructor(pokemons: PokemonBase[]) {
		this._pokemons = pokemons;
		this.randomGenerator = new RandomeGenerator();
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

	catch(userLevel: number) {
		const rarity = this.randomGenerator.rarity();
		const iv = this.randomGenerator.IV();
		const pk = this.search().rarity(rarity);
		const pokemon = pk[this.randomGenerator.pokemonindex(pk.length)];
		const level = this.randomGenerator.level(userLevel);
		return new Pokemon(pokemon, level, iv);
	}

	static async load() {
		const { data, error } = await fetchPokemons();
		if (error) throw error;
		return new PokemonService(data as PokemonBase[]);
	}

	private search() {
		return {
			rarity: (rare: Rarity) => _.filter(this._pokemons, pk => pk.rarity === rare)
		}
	}
}