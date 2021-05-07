import { createReducer } from "@reduxjs/toolkit"
import { fetchMovies } from "./MoviesActions"

export interface Movie {
    imdbID: string;
    poster: string;
    title: string;
    type: string;
    year: string;
}

export interface MOVIE_STATE {
    movies: { [id: string]: Movie }
}

const INITIAL_STATE: MOVIE_STATE = {
    movies: {}
}

export const moviesReducer = createReducer(INITIAL_STATE, (builder) => {
    builder.addCase(fetchMovies, (state: any, action: any) => {
        let movies: { [id: string]: Movie } = {};

        action.payload.forEach((movie: Movie) => movies[movie.imdbID] = movie);
        
        state.movies = movies;
    })
})