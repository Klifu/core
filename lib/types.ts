import { Slice, Store } from "@reduxjs/toolkit"

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

export const CPM_TABLE = {
	1: 0.094,
	1.5: 0.1351374318,
	2: 0.16639787,
	2.5: 0.192650919,
	3: 0.21573247,
	3.5: 0.2365726613,
	4: 0.25572005,
	4.5: 0.2735303812,
	5: 0.29024988,
	5.5: 0.3060573775,
	6: 0.3210876,
	6.5: 0.3354450362,
	7: 0.34921268,
	7.5: 0.3624577511,
	8: 0.3752356,
	8.5: 0.387592416,
	9: 0.39956728,
	9.5: 0.4111935514,
	10: 0.4225
}


export interface ReduxResponseObject {
	store: Store,
	slice: Slice
}