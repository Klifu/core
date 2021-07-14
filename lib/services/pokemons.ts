import { PokemonBase } from '../types';
import { fetchPokemons } from '../fetcher';
import { createSlice } from '@reduxjs/toolkit';

export const loadPokemonList = async () => {
	let { data, error } = await fetchPokemons();
	if (error) throw error;
	return createSlice({
		name: 'pokemon-list',
		initialState: data as PokemonBase,
		reducers: {}
	})
}