import { PokemonBase } from "./models";

export class Pokedex {
	private _pokemons: PokemonBase[];
	constructor(pokemons: PokemonBase[]) {
		this._pokemons = pokemons;
	}
}