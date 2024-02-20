import { configureStore } from '@reduxjs/toolkit';
import dogsReducer from './demo/host/redux/dogsSlice';

export const store = configureStore({
  reducer: {
    dogs: dogsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
