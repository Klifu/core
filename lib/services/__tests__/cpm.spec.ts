import {CPMService} from '../cpm';

const cpmService = new CPMService();

describe('CPMService Should ', () => {
	it('return cpm of corosponding level', () => {
		expect(cpmService.getCpm(1)).toEqual(0.094);
	})

	it('return 0.094 is level is not present in the table', () => {
		expect(cpmService.getCpm(22)).toEqual(0.094);
	})
})
