import { PokemonType } from './pokemon';

export type Neutral = 1;
export type Supper_Effective = 1.4;
export type Not_Very_Effective = 0.714;
export type Immune = 0.51

export type TypeEffectiveness = {
	[AttackType in PokemonType]: {
		[DefendType in PokemonType]: Neutral | Supper_Effective | Not_Very_Effective | Immune
	}
};

class TypeEffectiveTable {
	readonly _table: TypeEffectiveness;
	constructor() {
		this._table = {
			Bug: {
				Bug: 1, Dark: 1.4, Dragon: 1, Electric: 1, Fairy: 0.714, Fighting: 0.714,
				Fire: 0.714, Flying: 0.714, Ghost: 0.714, Grass: 1.4, Ground: 1, Ice: 1,
				Normal: 1, Poison: 0.714, Psychic: 1.4, Rock: 1, Steel: 0.714, Water: 1
			},
			Dark: {
				Bug: 1, Dark: 0.714, Dragon: 1, Electric: 1, Fairy: 0.714, Fighting: 0.714,
				Fire: 1, Flying: 1, Ghost: 1.4, Grass: 1, Ground: 1, Ice: 1,
				Normal: 1, Poison: 1, Psychic: 1.4, Rock: 1, Steel: 1, Water: 1
			},
			Dragon: {
				Bug: 1, Dark: 1, Dragon: 1.4, Electric: 1, Fairy: 0.51, Fighting: 1,
				Fire: 1, Flying: 1, Ghost: 1, Grass: 1, Ground: 1, Ice: 1,
				Normal: 1, Poison: 1, Psychic: 1, Rock: 1, Steel: 0.714, Water: 1
			},
			Electric: {
				Bug: 1, Dark: 1, Dragon: 0.714, Electric: 0.714, Fairy: 1, Fighting: 1,
				Fire: 1, Flying: 1.4, Ghost: 1, Grass: 0.714, Ground: 0.51, Ice: 1,
				Normal: 1, Poison: 1, Psychic: 1, Rock: 1, Steel: 1, Water: 1.4
			},
			Fairy: {
				Bug: 1, Dark: 1.4, Dragon: 1.4, Electric: 1, Fairy: 1, Fighting: 1.4,
				Fire: 0.714, Flying: 1, Ghost: 1, Grass: 1, Ground: 1, Ice: 1,
				Normal: 1, Poison: 0.714, Psychic: 1, Rock: 1, Steel: 0.714, Water: 1
			},
			Fighting: {
				Bug: 0.714, Dark: 1.4, Dragon: 1, Electric: 1, Fairy: 0.714, Fighting: 1,
				Fire: 1, Flying: 0.714, Ghost: 0.51, Grass: 1, Ground: 1, Ice: 1.4,
				Normal: 1.4, Poison: 0.714, Psychic: 0.714, Rock: 1.4, Steel: 1.4, Water: 1
			},
			Fire: {
				Bug: 1.4, Dark: 1, Dragon: 0.714, Electric: 1, Fairy: 1, Fighting: 1,
				Fire: 0.714, Flying: 1, Ghost: 1, Grass: 1.4, Ground: 1, Ice: 1.4,
				Normal: 1, Poison: 1, Psychic: 1, Rock: 0.714, Steel: 1.4, Water: 0.714
			},
			Flying: {
				Bug: 1.4, Dark: 1, Dragon: 1, Electric: 0.714, Fairy: 1, Fighting: 1.4,
				Fire: 1, Flying: 1, Ghost: 1, Grass: 1.4, Ground: 1, Ice: 1,
				Normal: 1, Poison: 1, Psychic: 1, Rock: 0.714, Steel: 0.714, Water: 1
			},
			Ghost: {
				Bug: 1, Dark: 0.714, Dragon: 1, Electric: 1, Fairy: 1, Fighting: 1,
				Fire: 1, Flying: 1, Ghost: 1.4, Grass: 1, Ground: 1, Ice: 1,
				Normal: 0.51, Poison: 1, Psychic: 1.4, Rock: 1, Steel: 1, Water: 1
			},
			Grass: {
				Bug: 0.714, Dark: 1, Dragon: 0.714, Electric: 1, Fairy: 1, Fighting: 1,
				Fire: 0.714, Flying: 0.714, Ghost: 1, Grass: 0.714, Ground: 1.4, Ice: 1,
				Normal: 1, Poison: 0.714, Psychic: 1, Rock: 1, Steel: 1, Water: 1
			},
			Ground: {
				Bug: 0.714, Dark: 1, Dragon: 1, Electric: 1.4, Fairy: 1, Fighting: 1,
				Fire: 1.4, Flying: 0.51, Ghost: 1, Grass: 0.714, Ground: 1, Ice: 1,
				Normal: 1, Poison: 1.4, Psychic: 1, Rock: 1.4, Steel: 1.4, Water: 1
			},
			Ice: {
				Bug: 1, Dark: 1, Dragon: 1.4, Electric: 1, Fairy: 1, Fighting: 1,
				Fire: 0.714, Flying: 1.4, Ghost: 1, Grass: 1.4, Ground: 1.4, Ice: 0.714,
				Normal: 1, Poison: 1, Psychic: 1, Rock: 1, Steel: 0.714, Water: 0.714
			},
			Normal: {
				Bug: 1, Dark: 1, Dragon: 1, Electric: 1, Fairy: 1, Fighting: 1,
				Fire: 1, Flying: 1, Ghost: 0.51, Grass: 1, Ground: 1, Ice: 1,
				Normal: 1, Poison: 1, Psychic: 1, Rock: 0.714, Steel: 0.714, Water: 1
			},
			Poison: {
				Bug: 1, Dark: 1, Dragon: 1, Electric: 1, Fairy: 1.4, Fighting: 1,
				Fire: 1, Flying: 1, Ghost: 0.714, Grass: 1.4, Ground: 0.714, Ice: 1,
				Normal: 1, Poison: 0.714, Psychic: 1, Rock: 0.714, Steel: 0.51, Water: 1
			},
			Psychic: {
				Bug: 1, Dark: 0.51, Dragon: 1, Electric: 1, Fairy: 1, Fighting: 1.4,
				Fire: 1, Flying: 1, Ghost: 1, Grass: 1, Ground: 1, Ice: 1,
				Normal: 1, Poison: 1.4, Psychic: 0.714, Rock: 1, Steel: 0.714, Water: 1
			},
			Rock: {
				Bug: 1.4, Dark: 1, Dragon: 1, Electric: 1, Fairy: 1, Fighting: 0.714,
				Fire: 1.4, Flying: 1.4, Ghost: 1, Grass: 1, Ground: 0.714, Ice: 1.4,
				Normal: 1, Poison: 1, Psychic: 1, Rock: 1, Steel: 0.714, Water: 1
			},
			Steel: {
				Bug: 1, Dark: 1, Dragon: 1, Electric: 0.714, Fairy: 1.4, Fighting: 1,
				Fire: 0.714, Flying: 1, Ghost: 1, Grass: 1, Ground: 1, Ice: 1.4,
				Normal: 1, Poison: 1, Psychic: 1, Rock: 1.4, Steel: 0.714, Water: 0.714
			},
			Water: {
				Bug: 1, Dark: 1, Dragon: 0.714, Electric: 1, Fairy: 1, Fighting: 1,
				Fire: 1.4, Flying: 1, Ghost: 1, Grass: 0.714, Ground: 1.4, Ice: 1,
				Normal: 1, Poison: 1, Psychic: 1, Rock: 1.4, Steel: 1, Water: 0.714
			}
		}
	}
}

export class TypeEffective extends TypeEffectiveTable {
	look(AttackType: PokemonType, DeffendType: PokemonType) {
		return this._table[AttackType][DeffendType];
	}
}