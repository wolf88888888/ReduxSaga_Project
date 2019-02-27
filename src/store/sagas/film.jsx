import { call, put } from 'redux-saga/effects';
import Apis from '../../utils/Apis'
import {
    GET_FILM,
} from '../types/film';
import {
    getFilmSuccess,
    getFilmFailure
} from '../actions/film'
import { takeEvery } from 'redux-saga';

export function * getfilmSaga({payload}) {
    try {
        const response = yield call(Apis.getFilm, payload);
        console.log("filmSaga response", response);
        if(response.status === 200) {
            yield put(getFilmSuccess({index: payload, film: response.data}));
        }
    } catch(e) {
        yield put(getFilmFailure(e.response.data));
    }
}

export const filmSagas = [
    takeEvery(GET_FILM, getfilmSaga)
];