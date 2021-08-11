import {TypeEffective} from '../TypeEffective';

const te = new TypeEffective();

describe('TypeEffective class Should ', () => {
	
	test('return 1.4', () => {
		expect(te.multiplier('Fire', 'Grass')).toEqual(1.4);
	})
})
