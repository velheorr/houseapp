import {createSlice} from '@reduxjs/toolkit'


const initialState = {

}


const houseSlice = createSlice({
	name: 'house',
	initialState,
	reducers: {
		menu: (state, action) => {state.selectMenu = action.payload},
	},
});

const {actions, reducer} = houseSlice;

export default reducer;
export const {
	menu
} = actions;