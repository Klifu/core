import { IV, StatInput } from '../types';
import { cpmTable } from '../utils';

export class StatService {
	private base_attack: number;
	private base_defense: number;
	private base_hp: number;
	private iv: IV;
	private level: number;
	private cpm: number;

	constructor(strat: StatInput) {
		this.base_attack = strat.attack;
		this.base_defense = strat.defense;
		this.base_hp = strat.hp;
		this.iv = strat.iv;
		this.level = strat.level;
		this.cpm = cpmTable(this.level);
	}

	getCurrentStrat() {
		let Attack: number = (this.base_attack + this.iv.attack) * this.cpm
		let Defense: number = (this.base_defense + this.iv.defense) * this.cpm
		let HP: number = (this.base_hp + this.iv.hp) * this.cpm
		let CP: number = (Attack * Defense ^ 0.5 * HP ^ 0.5 * this.cpm ^ 2) / 10

		return {
			Attack: Math.round(Attack),
			Defense: Math.round(Attack),
			HP: Math.round(HP),
			CP: Math.round(CP)
		}
	}
}