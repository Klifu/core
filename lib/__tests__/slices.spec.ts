import {pokemonListSlice} from '../slices';


describe('PokemonListSlice should', () => {
	it("return pokemon-list slice", () => {
		const pokemonSlice = pokemonListSlice([{
			id: 1, 
			name: 'Bulbasaur', 
			sprite: '', 
			type: ['Poision', 'Grass'],
			baseStat: {attack: 120, defense: 144, hp: 80},
			rarity: 'R'
	}]);
		expect(pokemonSlice.name).toMatch('pokemon-list');
	})
})
