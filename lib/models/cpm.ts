export interface CPM {
	[level: number]: number
}


export class CPMTable {
	readonly table: CPM;
	constructor() {
		this.table = {
			1: 0.094,
			1.5: 0.135137431,
			2: 0.16639787,
			2.5: 0.192650919,
			3: 0.21573247,
			3.5: 0.2365726613,
			4: 0.2557200,
			4.5: 0.2735303812,
			5: 0.29024988
		}
	}

	cpm(level: number): number | undefined {
		return this.table[level];
	}
}