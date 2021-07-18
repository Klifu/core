import { configureStore, Slice } from '@reduxjs/toolkit';
import { ReduxResponseObject } from './types';


export const generateRedux = (slice: Slice): ReduxResponseObject => {
	let store = configureStore({ reducer: slice.reducer });

	return { store, slice };
}

export const cpmTable = (level: number): number => {
	switch(level) {
		case 1: 
			return 0.094;
		case 1.5: 
			return 0.1351374318
		case 2: 
			return 0.16639787
		case 2.5: 
			return 0.192650919
		case 3: 
			return 0.21573247
		case 3.5: 
			return 0.2365726613
		case 4: 
			return 0.25572005
		case 4.5: 
			return 0.2735303812
		case 5: 
			return 0.29024988
		case 5.5: 
			return 0.3060573775
		case 6: 
			return 0.3210876
		case 6.5: 
			return 0.3354450362
		case 7: 
			return 0.34921268
		case 7.5: 
			return 0.3624577511
		case 8: 
			return 0.3752356
		case 8.5: 
			return 0.387592416
		case 9: 
			return 0.39956728
		case 9.5: 
			return 0.4111935514
		case 10: 
			return 0.4225
		default:
			return 0.094
	}
}