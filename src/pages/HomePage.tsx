import React from 'react';
import Results from '../features/Results/Results';
import SearchBar from '../features/SearchBar/SearchBar';

const HomePage = () => (
    <div className="flex flex-row items-center w-screen h-screen items-center">
        <div className="h-full w-full bg-yellow-200 bg-opacity-40">
            <SearchBar />
            <Results />
        </div>
        <div className="h-full w-full bg-green-700 bg-opacity-90">
            Nominated
        </div>
    </div>
);
export default HomePage;
