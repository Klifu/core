export interface PokemonBase {
	id: number,
	name: string,
	type: string[],
	sprite: string
}

export interface Pokemon extends PokemonBase {
	hp: number,
	attack: number,
	defense: number,
	'special-attack': number,
	'special-defense': number,
	speed: number,
	level?: number
}