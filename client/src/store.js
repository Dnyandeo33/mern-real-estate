import { combineReducers, configureStore, } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from "./redux-toolkit/user/userSlice";

const rootReducers = combineReducers({ user: userSlice })

const persistConfig = {
    key: 'root',
    storage,
    version: 1
}

const persistedReducers = persistReducer(persistConfig, rootReducers)

const store = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store);

export default store;

