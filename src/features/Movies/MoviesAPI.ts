const axios = require('axios').default;

const apiKey: string = '76bc6846';
const url: string = `http://www.omdbapi.com/?apikey=${apiKey}`;

export const fetchMoviesFromAPI = (title: string, page?: number) => {
    try {
        let pageParam: string = page ? `&page=${page}`: '';
        console.log(`${url}&s=${title}&type=movie}${pageParam}`);
        return axios.get(`${url}&s=${title}&type=movie${pageParam}`);
    } catch (error: any) {
        console.error(error);
    }
};
