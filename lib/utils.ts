import { configureStore, Slice } from '@reduxjs/toolkit';


export const generateRedux = (slice: Slice) => {
	let store = configureStore({ reducer: slice.reducer });

	return { store, slice };
}