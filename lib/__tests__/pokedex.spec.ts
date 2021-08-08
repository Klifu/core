import { PokemonBase } from '../models';
import { Pokedex } from '../pokedex';
import { fetchPokemons } from '../util/fetcher';

let pokedex: Pokedex;

describe('Pokedex should', () => {
	beforeAll(async () => {
		const { data } = await fetchPokemons();
		pokedex = new Pokedex(data)
	}, 10000)

	test('return all pokemons', () => {
		const pokemons: PokemonBase[] = pokedex.pokemons;
		expect(pokemons.length).toEqual(150);
	})

	test('return Bulbasaur', () => {
		const bulbasaur = pokedex.findBy().name('Bulbasaur');
		expect(bulbasaur).toBeTruthy();
	})

	test('return pokemon of id 1', () => {
		const pokemon = pokedex.findBy().id(1);
		expect(pokemon?.id).toEqual(1);
	})

	test('return all rare pokemons', () => {
		const rarePokemons = pokedex.filterBy().rarity('R');
		expect(rarePokemons).toBeTruthy();
	})

	test('return all fire pokemons', () => {
		const firePokemons = pokedex.filterBy().type('Fire');
		expect(firePokemons).toBeTruthy();
	})
})
