// This file will contain all the logic to fetch data from the API
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