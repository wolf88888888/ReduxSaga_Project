import { handleActions } from 'redux-actions';
import { 
    getFilm,
    getFilmSuccess,
    getFilmFailure
} from '../actions/film';

const initialState = () => {
    return ({
        reqesting: false,
        error: null,
        films: [],
    })
};

export default handleActions(
    {
        [getFilm]: (state) => {
            return {
                ...state,
                requesting: true,
                error: null,
            }
        },

        [getFilmSuccess]: (state, {payload}) => {
            console.log("access_token", payload);
            return {
                ...state,
                requesting: false,
                films: {
                    ...state.films,
                    [payload.index]: payload.film
                }
            }
        },

        [getFilmFailure]: (state, {payload}) => {
            return {
                ...state,
                requesting: false,
                error: payload,
            }
        },
    },
    initialState()
);