import { ReduxResponseObject } from '../../types';
import { PokemonService } from '../pokemon';

let pokemonService: PokemonService;

describe('Pokemon Service', () => {
	beforeAll(async () => {
		pokemonService = await PokemonService.load()
	}, 10000)

	it("should return pokemon service object", () => {
		expect(pokemonService instanceof PokemonService).toBeTruthy();
	})

	it('should return reduxResponseObject', () => {
		const response: ReduxResponseObject = pokemonService.list();
		expect(response).toBeDefined();
	})
})
