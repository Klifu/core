import Klifu, { Pokedex, PokemonTypeColor, Cache } from '../';

let klifu: Klifu;

describe('Export ', () => {

	test('Klifu should be defined', () => {
		expect(Klifu).toBeDefined();
	})

	test('Pokedex should be defined', () => {
		expect(Pokedex).toBeDefined();
	})

	test('PokemonTypeColor should be defined', () => {
		expect(PokemonTypeColor).toBeDefined();
	})

	test('Cache should be defined', () => {
		expect(Cache).toBeDefined();
	})
})

describe('Klifu class should ', () => {
	beforeAll(async () => {
		klifu = await Klifu.load();
	}, 10000);

	test('load klifu default', () => {
		expect(klifu instanceof Klifu).toBeTruthy();
	})

	test('return pokedex instance', () => {
		const pokedex: Pokedex = klifu.pokedex();
		expect(pokedex instanceof Pokedex).toBeTruthy();
	})
})
