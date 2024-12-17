import { configureStore, combineReducers } from '@reduxjs/toolkit';
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { allData } from './Slices/dataSlice';
import { auth } from './Slices/authSlice';
import { otp } from './Slices/otpSlice';
import { password } from './Slices/passwordSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  auth,
  allData,
  otp,
  password
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const mainStore = persistStore(store);
