import {createSlice} from '@reduxjs/toolkit'


const initialState = {
	streetData: [],
	houseData: [],
	flatData: [],
}


const houseSlice = createSlice({
	name: 'house',
	initialState,
	reducers: {
		optionsStreet: (state, action) => {state.streetData = action.payload},
		optionsHouse: (state, action) => {state.houseData = action.payload},
		optionsFlat: (state, action) => {state.flatData = action.payload},
		setOccupants: (state, action) => {state.occupantsData = action.payload},
	},
});

const {actions, reducer} = houseSlice;

export default reducer;
export const {
	optionsStreet, optionsHouse, optionsFlat, setOccupants
} = actions;