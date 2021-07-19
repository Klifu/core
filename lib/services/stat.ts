import { BaseStat, IV, StatInput } from '../types';
import { cpmTable } from '../utils';

export class StatService {
	private base_attack: number;
	private base_defense: number;
	private base_hp: number;
	private iv: IV;
	private level: number;
	private cpm: number;

	Attack: number;
	Defense: number;
	HP: number;
	CP: number

	constructor(strat: BaseStat, iv: IV, level: number) {
		this.base_attack = strat.attack;
		this.base_defense = strat.defense;
		this.base_hp = strat.hp;
		this.iv = iv;
		this.level = level;
		this.cpm = cpmTable(this.level);

		this.Attack = Math.round((this.base_attack + this.iv.attack) * this.cpm);
		this.Defense = Math.round((this.base_defense + this.iv.defense) * this.cpm);
		this.HP = Math.round((this.base_hp + this.iv.hp) * this.cpm);

		this.CP = Math.round((this.Attack * this.Defense ^ 0.5 * this.HP ^ 0.5 * this.cpm ^ 2) / 10);
	}

	getAttack = (): number => this.Attack;
	getDefense = (): number => this.Defense;
	getHP = (): number => this.HP;
	getCP = (): number => this.CP;
}