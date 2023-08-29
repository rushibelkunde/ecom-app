import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducer";
import storage from './storage';

import { persistStore, persistReducer } from 'redux-persist';


// using persist reducer
const persistedReducer = persistReducer(storage, cartReducer);


//store
export const store = configureStore({
    reducer: persistedReducer
})


//persistor
export const persistor = persistStore(store);