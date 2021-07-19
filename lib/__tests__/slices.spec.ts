import {pokemonListSlice} from '../slices';
import {Slice} from '@reduxjs/toolkit';


describe('PokemonListSlice should', () => {
	it("return pokemon-list slice", () => {
		const pokemonSlice = pokemonListSlice([{id: 1, name: 'Bulbasaur', sprite: '', type: ['Poision', 'Grass']}]);
		expect(pokemonSlice.name).toMatch('pokemon-list');
	})
})
