import {createSlice} from '@reduxjs/toolkit'


const initialState = {
	show: false,
	data: {}
}


const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		showModal: (state, action) => {state.show = action.payload},
		dataForModal: (state, action) => {state.data = action.payload},
	},
});

const {actions, reducer} = modalSlice;

export default reducer;
export const {
	showModal,dataForModal
} = actions;