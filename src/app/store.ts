import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userReducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom useSelector hook for our store
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
