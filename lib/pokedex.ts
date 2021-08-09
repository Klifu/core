import _ from "lodash";
import { PokemonBase, PokemonType, Rarity } from "./models";

export class Pokedex {
	private _pokemons: PokemonBase[];
	constructor(pokemons: PokemonBase[]) {
		this._pokemons = pokemons;
	}

	get pokemons() {
		return this._pokemons
	}

	findBy(){
		return {
			name: (pokemonName: string) => _.find(this._pokemons, pokemon => pokemon.name === pokemonName),
			id: (pokemonId: number) => _.find(this._pokemons, pokemon => pokemon.id === pokemonId)
		}
	}

	filterBy() {
		return {
			rarity: (pokemonRarity: Rarity) => _.filter(this._pokemons, pokemon => pokemon.rarity === pokemonRarity),
			type: (pokemonType: PokemonType) => _.filter(this._pokemons, pokemon => pokemon.type.includes(pokemonType))
		}
	}
}