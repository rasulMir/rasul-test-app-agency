import { createSlice, createAsyncThunk, PayloadAction  } from '@reduxjs/toolkit';
import { IinitialState, IResponseData, TSelected } from './reduxTypes';

interface IFetchProps {
	numberImg?: number;
	type: string;
}

export const fetchImages = createAsyncThunk(
	'all/fetchAll',
	async function ({ numberImg,  type }: IFetchProps, { rejectWithValue }) {
		try {
			const response = await fetch(`https://pixabay.com/api/?key=28196625-24be365714fc979df28854a7f&q=yellow+background&image_type=${type}&per_page=${numberImg}`);
			const data = (await response.json()) as IResponseData;

			return data.hits;
		}
		catch (error) {
			return rejectWithValue(error);
		}
	}
);

const initialState: IinitialState = {
	loading: false,
	error: false,
	selected: 'all',
	data: [],
};

const errorHandler = (state: IinitialState) => {
	state.error = true;
	state.loading = false;
};

const pendingHandler = (state: IinitialState) => {
	state.error = false;
	state.loading = true;
};

const agencySlice = createSlice({
	name: 'agency',
	initialState,

	reducers: {
		changeSelected (state, payload: PayloadAction<TSelected>) {
			state.selected = payload.payload;
			state.data = [];
		},

		deleteItem (state, { payload }: PayloadAction<number>) {
			state.data = state.data.filter(i => i.id !== payload);
		}
	},

	extraReducers: {
		[`${fetchImages.pending}`]: pendingHandler,
		[`${fetchImages.rejected}`]: errorHandler,
		[`${fetchImages.fulfilled}`]: (state, action) => {
			state.error = false;
			state.loading = false;
			state.data = action.payload;
		},
	}
});


export const { changeSelected, deleteItem } = agencySlice.actions;

export default agencySlice.reducer;