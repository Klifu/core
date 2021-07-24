import { CPMService } from '../services/cpm';
export interface PokemonBase {
	id: number,
	name: string,
	sprite: string,
	type: PokemonType,
	baseStat: BaseStat,
	rarity: Rarity
}

export type PokemonType = 'Normal'
	| 'Fire'
	| 'Water'
	| 'Grass'
	| 'Electric'
	| 'Ice'
	| 'Fighting'
	| 'Poision'
	| 'Ground'
	| 'Flying'
	| 'Psychic'
	| 'Bug'
	| 'Rock'
	| 'Ghost'
	| 'Dark'
	| 'Dragon'
	| 'Steel'
	| 'Fairy';

export interface BaseStat {
	attack: number,
	defense: number,
	hp: number
}

export interface Stat {
	attack: number,
	defense: number,
	hp: number,
	cp: number
}

export interface IV {
	attack: number,
	defense: number,
	hp: number
}

export type Rarity = 'C' | 'R' | 'SR' | 'UR' | 'L';

export class Base {
	protected _json: PokemonBase;
	constructor(json: PokemonBase) {
		this._json = json;
	}
}

export class Pokemon extends Base {

	private _stat: Stat;
	private _level: number;
	private _iv: IV;
	private cpmService: CPMService;

	constructor(json: PokemonBase, level: number, iv: IV) {
		super(json);
		this._level = level;
		this._iv = iv;
		this.cpmService = new CPMService();
		this._stat = this.calculateStat(this._level, this._iv);
	}
	id(): number {
		return this._json.id;
	}

	name(): string {
		return this._json.name;
	}

	sprite(): string {
		return this._json.sprite;
	}

	type(): PokemonType {
		return this._json.type;
	}

	baseStat(): BaseStat {
		return this._json.baseStat;
	}

	rarity(): Rarity {
		return this._json.rarity;
	}

	level(): number {
		return this._level;
	}

	stat(): Stat {
		return this._stat;
	}

	private calculateStat(level: number, iv: IV): Stat {
		let baseStat = this._json.baseStat;
		const attack = Math.round((baseStat.attack + iv.attack) * this.cpmService.getCpm(level));
		const defense = Math.round((baseStat.defense + iv.defense) * this.cpmService.getCpm(level));
		const hp = Math.round((baseStat.hp + iv.hp) * this.cpmService.getCpm(level));
		const cp = Math.round((attack * defense ^ 0.5 * hp ^ 0.5 * this.cpmService.getCpm(level) ^ 2) / 10);
		return { attack, defense, hp, cp };
	}

}