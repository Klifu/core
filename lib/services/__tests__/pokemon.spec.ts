import { Pokemon } from '../../models';
import { PokemonService, PokemonTypeColor } from '../pokemon';

let pokemonService: PokemonService;

describe('Pokemon Service', () => {
	beforeAll(async () => {
		pokemonService = await PokemonService.load()
	}, 10000)

	it("should return pokemon service object", () => {
		expect(pokemonService instanceof PokemonService).toBeTruthy();
	})

	it('should return reduxResponseObject', () => {
		const response = pokemonService.pokemons;
		expect(response).toBeDefined();
	})

	it('should search according to name', () => {
		const bulbasaur = pokemonService.where().name("Bulbasaur");
		expect(bulbasaur?.name).toMatch("Bulbasaur");
	})

	it("should search according to id", () => {
		const bulbasaur = pokemonService.where().id(1);
		expect(bulbasaur?.name).toMatch("Bulbasaur");
	})

	it("should filter according to rarity", () => {
		const rarePokemons = pokemonService.where().rarity('R');
		expect(rarePokemons).toBeTruthy();
	})

	it("should fillter according to type", () => {
		const grassPokemons = pokemonService.where().type('Grass');
		expect(grassPokemons).toBeTruthy();
	})

	it('Should generate random pokemon entity to catch', () => {
		const pokemon = pokemonService.catch(4);
		expect(pokemon instanceof Pokemon).toBeTruthy();
	})

})

describe('PokemonTypeColor Should', () => {

	test('return color of bug type', () => {
		expect(PokemonTypeColor.get('Bug')).toMatch('A8B820');
	})
})