import { IV, CPM_TABLE } from '../types';
import { cpmTable } from '../utils';

export const cpm = (level: any): number => {
	//@ts-ignore
	return CPM_TABLE[level];
}

export interface StatInput {
	attack: number,
	defense: number,
	hp: number,
	level: number,
	iv: IV
}

export const Strat = (stats: StatInput) => {
	let Attack: number = (stats.attack + stats.iv.attack) * cpm(stats.level);
	let Defense: number = (stats.defense + stats.iv.defense) * cpm(stats.level);
	let HP: number = (stats.hp + stats.iv.hp) * cpm(stats.level);

	let CP: number = (Attack * Defense ^ 0.5 * HP ^ 0.5 * cpm(stats.level) ^ 2) / 10

	return {
		Attack: Math.round(Attack),
		Defense: Math.round(Defense),
		HP: Math.round(HP),
		CP: Math.round(CP)
	}
}

export class StratService {
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