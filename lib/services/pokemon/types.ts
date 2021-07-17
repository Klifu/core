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
	| 'Fairy'

export interface PokemonBase {
	id: number,
	name: string,
	type: PokemonType[],
	sprite: string
}

export interface IV {
	attack: number,
	defense: number,
	hp: number
}

export interface Pokemon extends PokemonBase {
	attack: number,
	defense: number,
	hp: number,
	iv: IV,
	cp: number,
	level: number
}