import { createSlice } from '@reduxjs/toolkit';
import { PokemonBase } from './types';

export const pokemonListSlice = (pokemonList: PokemonBase[]) => {
	return createSlice({
		name: 'pokemon-list',
		initialState: pokemonList,
		reducers: {}
	})
}