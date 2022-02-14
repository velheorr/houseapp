import {createSlice} from '@reduxjs/toolkit'


const initialState = {
	occupantsData: {},

}

const occupantSlice = createSlice({
	name: 'occupant',
	initialState,
	reducers: {
		setOccupants: (state, action) => {state.occupantsData = action.payload},
	},
});

const {actions, reducer} = occupantSlice;

export default reducer;
export const {
	setOccupants
} = actions;