export const API_URL = () => {
	const URL = 'https://klifu.deta.dev/';

	return {
		pokemons: () => URL + 'pokemons'
	}
}