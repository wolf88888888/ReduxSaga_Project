import { createActions } from 'redux-actions';
import {
    GET_FILM,
    GET_FILM_SUCCESS,
    GET_FILM_FAILURE,
} from '../types/film';
  
export const {
    getFilm,
    getFilmSuccess,
    getFilmFailure
} = createActions(
    GET_FILM,
    GET_FILM_SUCCESS,
    GET_FILM_FAILURE,
);