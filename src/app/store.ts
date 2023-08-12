// eslint-disable-next-line
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authApi } from '../services/authApi';
import authReducer from './features/auth/authSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom useSelector and useDuspatch hooks for the store
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
setupListeners(store.dispatch);
