import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { fetchMovies } from '../Movies/MoviesActions';
import { fetchMoviesFromAPI } from '../Movies/MoviesAPI';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const dispatch: AppDispatch = useDispatch();

    const handleKeyPress = (e: any) => {
        e.preventDefault();
        if (e.currentTarget.value.length === 0) return
        if (e.key === 'Enter') {
            fetchMoviesFromAPI(query).then((results: any) => dispatch(fetchMovies(results?.data?.Search)));
        }
    };

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        setQuery(e.currentTarget.value);
    };

    return (
        <div className="">
            <input
                type="text"
                className="w-full h-14 rounded focus:shadow focus:outline-none bg-gray-100 p-4 "
                placeholder="Search movie titles"
                onChange={handleChange}
                onKeyUp={handleKeyPress}
            />
        </div>
    );
};
export default SearchBar;
