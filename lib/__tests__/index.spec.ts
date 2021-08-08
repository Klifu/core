import Klifu, { Pokedex } from '../';

let klifu: Klifu;

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
