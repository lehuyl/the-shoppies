import React from 'react';
import { Movie } from '../Movies/MoviesReducer';

interface Props {
    movie: Movie;
}

const MovieItem = ({ movie }: Props) => (
    <div className="flex flex-row h-20 w-full p-2 justify-between">
        <div
            className="h-64 w-1/3 bg-cover bg-bottom border pb-4"
            style={{ backgroundImage: `url(${movie.Poster})` }}
        />
        <span>{movie.Title}</span>
        <span>{movie.Year}</span>
    </div>
);

export default MovieItem;
