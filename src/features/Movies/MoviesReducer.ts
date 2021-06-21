import { createReducer } from '@reduxjs/toolkit';
import {
    fetchMoviesFailure,
    fetchMoviesStart,
    fetchMoviesSuccess,
} from './MoviesActions';

export interface Movie {
    imdbID: string;
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
}

export interface MOVIE_STATE {
    movies: { [id: string]: Movie };
    error: any;
    isFetching: boolean;
}

const INITIAL_STATE: MOVIE_STATE = {
    movies: {},
    error: null,
    isFetching: false,
};

export const moviesReducer = createReducer(INITIAL_STATE, builder => {
    builder.addCase(fetchMoviesStart, (state: any, action: any) => {
        state.isFetching = true;
    });
    builder.addCase(fetchMoviesSuccess, (state: any, action: any) => {
        if (!action.payload) return state;
        let movies: { [id: string]: Movie } = {};
        console.log(action.payload);
        action.payload.forEach(
            (movie: Movie) => (movies[movie.imdbID] = movie),
        );

        state.movies = movies;
        state.isFetching = false;
    });
    builder.addCase(fetchMoviesFailure, (state: any, action: any) => {
        state.error = action.payload;
        state.isFetching = false;
    });
    builder.addDefaultCase((state: any, action: any) => {
        return state;
    });
});
