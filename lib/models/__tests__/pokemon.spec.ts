import { Pokemon } from '../pokemon';
import { PokemonService } from '../../services';

let bulbasaur: Pokemon;

describe('pokemon ', () => {

	beforeAll(async () => {
		const pokemonService = await PokemonService.load();
		const base = pokemonService.where().name("Bulbasaur");
		if (base) {
			bulbasaur = new Pokemon(base, 2, { attack: 6, defense: 8, hp: 11 });
		}
	}, 10000)

	it('entity should be defined', () => {
		expect(bulbasaur).toBeDefined();
	})

	it('base should match', () => {
		expect(bulbasaur.name()).toMatch("Bulbasaur");
		expect(bulbasaur.rarity()).toMatch('R');
		expect(bulbasaur.id()).toEqual(1);
		expect(bulbasaur.baseStat()).toBeDefined();
		expect(bulbasaur.sprite()).toMatch('https://dl.airtable.com/.attachments/4e067157c7f33124cfba44c3543bb827/39862f4e/1.png');
		expect(bulbasaur.type()).toEqual(['Grass', 'Poison']);
	})

	it('should have a level', () => {
		expect(bulbasaur.level()).toEqual(2);
	})

	it('should have calucated stat', () => {
		const stat = bulbasaur.stat();
		expect(stat.attack).toBeTruthy();
		expect(stat.defense).toBeTruthy();
		expect(stat.hp).toBeTruthy();
		expect(stat.cp).toBeTruthy();
		//CP should not be less than 10
		expect(stat.cp).toBeGreaterThanOrEqual(10);
	})
})
