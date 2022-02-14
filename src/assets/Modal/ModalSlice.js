import {createSlice} from '@reduxjs/toolkit'


const initialState = {
	show: false,
	data: {}
}


const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		// ф-я открытия/закрытия модального окна
		showModal: (state, action) => {state.show = action.payload},
		// данные для модального окна - для редактирования жителя
		dataForModal: (state, action) => {state.data = action.payload},
	},
});

const {actions, reducer} = modalSlice;

export default reducer;
export const {
	showModal,dataForModal
} = actions;