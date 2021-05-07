import { createReducer } from "@reduxjs/toolkit"
import { fetchMovies } from "./MoviesActions"

export interface Movie {
    imdbID: string;
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
}

export interface MOVIE_STATE {
    movies: { [id: string]: Movie }
}

const INITIAL_STATE: MOVIE_STATE = {
    movies: {}
}

export const moviesReducer = createReducer(INITIAL_STATE, (builder) => {
    builder.addCase(fetchMovies, (state: any, action: any) => {
        if (!action.payload) return state;
        let movies: { [id: string]: Movie } = {};
        console.log(action.payload);
        action.payload.forEach((movie: Movie) => movies[movie.imdbID] = movie);
        
        state.movies = movies;
    })
    builder.addDefaultCase((state: any, action: any) => {
        return state;
    })
})