import {configureStore} from "@reduxjs/toolkit";
import house from '../components/Adress/HouseSlice'
import modal from '../assets/Modal/ModalSlice'
import occupant from '../components/Occupant/OccupantSlice'

const store = configureStore({
	reducer: {house, modal, occupant},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production',

})

export default store;

