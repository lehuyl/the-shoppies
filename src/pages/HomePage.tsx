import React from 'react';
import Results from '../features/Results/Results';
import SearchBar from '../features/SearchBar/SearchBar';

const HomePage = () => (
    <div className="flex flex-col items-center w-11/12 h-screen items-center py-20 px-80 bg-gray-200">
        <SearchBar />
        <Results />
    </div>
);
export default HomePage;
