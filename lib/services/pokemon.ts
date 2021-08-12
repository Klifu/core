import { fetchPokemons } from '../util/fetcher';
import { PokemonBase, PokemonType, Rarity, Pokemon, TypeColorCode } from '../models';
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

export class PokemonTypeColor {
	private static colorCodeTable: TypeColorCode = {
		Bug: 'A8B820',
		Dark: '705848',
		Dragon: '7038F8',
		Electric: 'F8D030',
		Fairy: 'F0B6BC',
		Fighting: 'C03028',
		Fire: 'F08030',
		Flying: 'A890F0',
		Ghost: '705898',
		Grass: '78C850',
		Ground: 'E0C068',
		Ice: '98D8D8',
		Normal: 'A8A878',
		Poison: 'A040A0',
		Psychic: 'F85888',
		Rock: 'B8A038',
		Steel: 'B8B8D0',
		Water: '6890F0'
	}
	static get(pokemonType: PokemonType): string {
		return this.colorCodeTable[pokemonType];
	}
}