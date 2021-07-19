import { Stat } from '../../types';
import { StatService } from '../stat';


describe('StratService should', () => {
	it("return stats", () => {
		const baseStat: Stat = {
			attack: 120,
			defense: 144,
			hp: 124,
			iv: { attack: 8, hp: 8, defense: 10 },
			level: 4
		}
		let statService = new StatService(baseStat);
		expect(statService.getCurrentStrat()).toBeTruthy();
	})
})
