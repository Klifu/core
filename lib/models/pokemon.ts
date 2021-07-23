
export interface PokemonBase {
	id: number,
	name: string,
	sprite: string,
	type: PokemonType,
	baseStat: BaseStat,
	rarity: Rarity,
	level?: number
	stat?: Stat,
	iv?: IV
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
	id(): number {
		return this._json.id;
	}

	name(): string {
		return this._json.name;
	}

	sprite(): string {
		return this._json.name;
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

	stat(): Stat | undefined {
		return this._json.stat;
	}

	level(): number | undefined {
		return this._json.level;
	}

}