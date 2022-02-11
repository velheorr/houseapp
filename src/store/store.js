import {configureStore} from "@reduxjs/toolkit";
import house from '../components/HouseSlice'


const store = configureStore({
	reducer: {house},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production',

})

export default store;

