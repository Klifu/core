import { Pokemons } from './model';
import { Slice, Store } from '@reduxjs/toolkit';
import { PokemonBase } from './types';

let pokemonListSlice: Slice;
let pokemonStore: Store

describe('Pokemons class should ', () => {
	beforeAll(async () => {
		const { slice, store } = await Pokemons.list();
		pokemonListSlice = slice
		pokemonStore = store
	}, 10000);
	it('return a slice', () => {
		expect(pokemonListSlice).toBeDefined();
	});

	it('return a slice with pokemon list', () => {
		let pokemons: PokemonBase[] = pokemonStore.getState();
		expect(pokemons.length).toEqual(150);
	})
})
