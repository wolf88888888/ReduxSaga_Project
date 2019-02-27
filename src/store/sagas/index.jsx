//https://medium.com/@js_tut/the-saga-continues-magic-in-react-44da8d134285
//https://github.com/sotojuan/saga-login-flow/blob/master/app/sagas/index.js

import { all } from 'redux-saga/effects';
import { filmSagas  } from './film';

export default function *sagas() {

    yield all([
        ...filmSagas,
    ]);
    
}