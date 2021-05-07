import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { moviesReducer } from '../features/Movies/MoviesReducer';

export const store = configureStore({
  reducer: {
    movies: moviesReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
