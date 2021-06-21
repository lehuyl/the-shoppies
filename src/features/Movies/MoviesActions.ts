import { createAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../../app/store';
import { fetchMoviesFromAPI } from './MoviesAPI';
import { Movie } from './MoviesReducer';

export const fetchMoviesStart = createAction<string>('movies/fetch');
export const fetchMoviesSuccess = createAction<Movie[]>('movies/fetch-success');
export const fetchMoviesFailure = createAction<any>('movies/fetch-failure');

export const fetchMoviesStartAsync: any = (query: string) => {
    return (dispatch: AppDispatch) => {
        dispatch(fetchMoviesStart);

        fetchMoviesFromAPI(query)
            .then((results: any) =>
                dispatch(fetchMoviesSuccess(results.data.Search)),
            )
            .catch((error: any) => dispatch(fetchMoviesFailure(error)));
    };
};
