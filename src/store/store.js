import {configureStore} from "@reduxjs/toolkit";
import house from '../components/Adress/HouseSlice'


const store = configureStore({
	reducer: {house},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production',

})

export default store;

