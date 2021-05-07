import { createAction } from "@reduxjs/toolkit";
import { Movie } from "./MoviesReducer";

export const fetchMovies = createAction<Movie[]>('movies/fetch')