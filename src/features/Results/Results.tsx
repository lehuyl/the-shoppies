import React from 'react';
import { useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import { Movie } from '../Movies/MoviesReducer';
import { selectMovies } from '../Movies/MoviesSelector';

const Results = () => {
    const movies: { [id: string]: Movie } = useSelector(selectMovies);
    
    return (
        <div className="h-full w-8/12 bg-red-100">
            {Object.values(movies).map((movie: Movie) => (
                <MovieItem key={movie.imdbID} movie={movie} />
            ))}
        </div>
    );
};
export default (Results);
