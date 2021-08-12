import {CPMTable} from '../cpm';

const cpmTable = new CPMTable();

describe('CPMTable should ', () => {

	test('be defined', () => {
		expect(CPMTable).toBeDefined();
	})

	test('should return undefined if not CPM not present', () => {
		expect(cpmTable.cpm(41)).toBeUndefined();
	})

	test('should return cpm if present in the table', () => {
		expect(typeof cpmTable.cpm(1) === 'number').toBeTruthy();
	})
})