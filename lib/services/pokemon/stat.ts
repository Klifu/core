import { IV, CPM_TABLE } from './types';

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