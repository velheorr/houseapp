import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	occupantsData: {},
	occupantsAdress: '',
	addressId: ''

}

const occupantSlice = createSlice({
	name: 'occupant',
	initialState,
	reducers: {
		setOccupants: (state, action) => {
			state.occupantsData = action.payload
			state.occupantsAdress = `${action.payload.streetName}, ${action.payload.building}, кв.${action.payload.flat}`
			state.addressId = action.payload.addressId
		},
	},
});

const {actions, reducer} = occupantSlice;

export default reducer;
export const {
	setOccupants
} = actions;