import { fetchPokemons } from './fetcher';

describe('fetchPokemons should ', () => {
	it('fetch all pokemons from API', async () => {
		let { data, error } = await fetchPokemons();
		expect(error).toBeUndefined();
		expect(data).toBeDefined();
	}, 10000)
})
