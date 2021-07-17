import { IV } from './types';

export interface StatInput {
	attack: number,
	defense: number,
	hp: number,
	level: number,
	iv: IV
}

const Strat = (stats: StatInput) => {
	let Attack: number = (stats.attack + stats.iv.attack)
	let Defense: number = (stats.defense + stats.iv.defense)
	let HP: number = (stats.hp + stats.iv.hp)

	let CP: number = (Attack * Defense^0.5 * HP^0.5 )/10

	return {
		Attack,
		Defense,
		HP,
		CP
	}
}