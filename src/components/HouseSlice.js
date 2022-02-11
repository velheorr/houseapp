import {createSlice} from '@reduxjs/toolkit'


const initialState = {
	streetData: [],
	houseData: []
}


const houseSlice = createSlice({
	name: 'house',
	initialState,
	reducers: {
		optionsStreet: (state, action) => {state.streetData = action.payload},
		optionsHouse: (state, action) => {state.houseData = action.payload},
	},
});

const {actions, reducer} = houseSlice;

export default reducer;
export const {
	optionsStreet, optionsHouse
} = actions;