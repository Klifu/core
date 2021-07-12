import { API_URL } from './constants';
import Axios from 'axios';
import { Pokemon } from './types';

export const pokemons = async () => {
	try {
		let { data } = await Axios({ url: API_URL.pokemons, method: 'GET' }) 
		return { data } as {data: Pokemon[]};
	} catch (error) {
		return { undefined, error };
	}
}