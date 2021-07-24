import _ from 'lodash';

class CPM {
	readonly level: number;
	readonly cpm: number;
	constructor(level: number, cpm: number) {
		this.level = level;
		this.cpm = cpm;
	}
}

export class CPMService {
	private CPMTable: CPM[];

	constructor() {
		this.CPMTable = this.init();
	}

	getCpm(level: number): number {
		let cpm = _.find(this.CPMTable, cpm => cpm.level === level)
		if (cpm) return cpm.cpm;
		return 0.094;
	}

	private init() {
		return [
			new CPM(1, 0.094),
			new CPM(1.5, 0.135137431),
			new CPM(2, 0.16639787),
			new CPM(2.5, 0.192650919),
			new CPM(3, 0.21573247),
			new CPM(3.5, 0.2365726613),
			new CPM(4, 0.2557200),
			new CPM(4.5, 0.2735303812),
			new CPM(5, 0.29024988)
		];
	}
}