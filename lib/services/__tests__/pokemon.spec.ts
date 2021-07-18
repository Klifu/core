import { PokemonService } from '../pokemon';


describe('Pokemon Service', () => {
	it("should return pokemon service object", async () => {
		const pokemonService = await PokemonService.load();
		expect(pokemonService instanceof PokemonService).toBeTruthy();
	}, 10000)
})
