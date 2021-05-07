import { createSelector } from "reselect";
import { RootState } from "../../app/store";
import { MOVIE_STATE } from "./MoviesReducer";

const selectMovieState = (state: RootState) => state.movies;

export const selectMovies = createSelector(
    [selectMovieState],
    (movies: MOVIE_STATE) => movies.movies
)