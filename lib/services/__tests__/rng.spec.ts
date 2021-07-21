import { IV, Pokemon } from '../../types';
import { PokemonService } from '../pokemon';
import { RandomeGenerator } from '../rng';

const generator = new RandomeGenerator();
let pokemonService: PokemonService

describe('RandomGenerator.IV should', () => {
	it('return random IV', () => {
		let iv: IV = generator.IV();
		expect(iv).toBeDefined();
	})
})

describe('RandomGenerator should', () => {
	beforeAll(async () => {
		pokemonService = await PokemonService.load();
	}, 10000)

	it("generate random pokemon ", () => {
		const pokemon: Pokemon = generator.generatePokemon(pokemonService, 5);
		expect(pokemon).toBeDefined();
	})
})
