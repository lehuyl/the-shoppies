const axios = require('axios').default;

const apiKey: string = '76bc6846';
const url: string = `http://www.omdbapi.com/?apikey=${apiKey}`;

export const fetchMoviesFromAPI = (title: string) => {
    try {
        return axios.get(`${url}&s=${title}`);
    } catch (error: any) {
        console.error(error);
    }
};
