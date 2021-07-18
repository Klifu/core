import { cpm, Strat } from '../stat';

describe('cpm should', () => {
	it('return cpm value according to level', () => {
		expect(cpm(1)).toEqual(0.094)
	})
})

describe('Strat should ', () => {
	it('return calculated strat', () => {
		let { Attack, CP, Defense, HP } = Strat({
			attack: 20,
			defense: 40,
			hp: 60,
			iv: { attack: 12, defense: 10, hp: 8 },
			level: 3
		})
		expect(Attack).toBeDefined();
		expect(Defense).toBeDefined();
		expect(CP).toBeDefined();
		expect(HP).toBeDefined();
	})
})
