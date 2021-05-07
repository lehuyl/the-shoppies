import React from 'react';
import { Movie } from '../Movies/MoviesReducer';

interface Props {
    movie: Movie;
}

const MovieItem = ({ movie }: Props) => (
    <div className="flex flex-row h-20 w-full p-2 justify-between">
        <span>{movie.Title}</span>
        <span>{movie.Year}</span>
    </div>
);

export default MovieItem;
