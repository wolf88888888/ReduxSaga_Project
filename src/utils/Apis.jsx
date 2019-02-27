import axios from "axios";

// const baseURL = "http://localhost:3000/api";

const baseURL = "https://swapi.co/api";
export default {
    // Saves a book to the database
    getPeople: function(page) {
        return axios.get(baseURL + "/people/",  {
        params: {
            page: page
        }});
    },
    getFilm: function(index) {
        return axios.get(baseURL + "/films/" + index);
    },
};
