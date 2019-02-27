import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import rootReducer from './reducers';
import rootSaga from './sagas';

const persistConfig = {
    timeout: 10000,
    key: 'root',
    storage,
}
  
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function (initialState = {}) {
    // Middleware and Store enhancers
    const sagaMiddleware = createSagaMiddleware();
    const enhancers = [
        applyMiddleware(sagaMiddleware),
    ];

    if (process.env.NODE_ENV !== 'production') {
        enhancers.push(applyMiddleware(createLogger()));
        window.devToolsExtension && enhancers.push(window.devToolsExtension());
    }

    const store = createStore(persistedReducer, initialState, compose(...enhancers));
    /* ------------- Saga Middleware ------------- */
    sagaMiddleware.run(rootSaga);

    return store;
}
