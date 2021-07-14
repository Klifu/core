import { API_URL } from './constants';
import Axios from 'axios';

export const fetchPokemons = async () => {
	try {
		let { data } = await Axios({ url: API_URL().pokemons(), method: 'GET' });
		return { data }
	} catch (error) {
		return { undefined, error };
	}
}