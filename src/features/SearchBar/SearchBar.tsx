import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { AppDispatch } from '../../app/store';
import { fetchMoviesStartAsync } from '../Movies/MoviesActions';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const dispatch: AppDispatch = useAppDispatch();

    const handleKeyPress = (e: any) => {
        e.preventDefault();
        if (e.currentTarget.value.length === 0) return
        if (e.key === 'Enter') {
            dispatch(fetchMoviesStartAsync(query));
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
