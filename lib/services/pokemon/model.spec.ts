import { Pokemons } from './model';
import { Slice, configureStore, Store } from '@reduxjs/toolkit';
import { PokemonBase } from './types';

let pokemonListSlice: Slice
let store: Store

describe('Pokemons class should ', () => {
	beforeAll(async () => {
		pokemonListSlice = await Pokemons.list();
		store = configureStore({reducer: pokemonListSlice.reducer});
	}, 10000);
	it('return a slice', () => {
		expect(pokemonListSlice).toBeDefined();
	});

	it('return a slice with pokemon list', () => {
		let pokemons: PokemonBase[] = store.getState();
		expect(pokemons.length).toEqual(150);
	})
})
