import { configureStore } from '@reduxjs/toolkit';
import customerSlice from './slices/customerSlice';
import cartSlice from './slices/cartSlice';
import userSlice from './slices/userSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // usa localStorage

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  customer: customerSlice,
  cart: cartSlice,
  user: userSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], // define quais slices você quer persistir
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // necessário para evitar erros com redux-persist
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: import.meta.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
export default store;
