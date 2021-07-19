import { BaseStat, IV, Stat } from '../../types';
import { StatService } from '../stat';


describe('StratService should', () => {
	it("return stats", () => {
		const baseStat: BaseStat = {
			attack: 120,
			defense: 144,
			hp: 124,
		}
		const iv: IV = { attack: 9, hp: 10, defense: 12 };
		let statService = new StatService(baseStat, iv, 4);
		expect(statService instanceof StatService).toBeTruthy();
	})
})
