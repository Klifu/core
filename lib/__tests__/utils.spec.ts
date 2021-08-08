import { cpmTable} from '../util/utils';

describe('cpmTable', () => {
	it('Should return cpm according to the level', () => {
		for(let i = 1; i<=10; i = i+0.5){
			expect(cpmTable(i)).toEqual(cpmTable(i));
		}
	})

	it('should return 0.094 if no input is provided', () => {
		expect(cpmTable()).toEqual(0.094);
	})
})
