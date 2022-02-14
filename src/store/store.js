import {configureStore} from "@reduxjs/toolkit";
import house from '../components/Adress/HouseSlice'
import modal from '../assets/Modal/ModalSlice'

const store = configureStore({
	reducer: {house, modal},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production',

})

export default store;

