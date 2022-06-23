import { configureStore } from '@reduxjs/toolkit';
import agencyReducer from './agencySlice';

const store = configureStore({
	reducer: {
		agency: agencyReducer,
	}
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
