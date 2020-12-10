// import {createStore,applyMiddleware} from 'redux';
import {createStore} from 'redux';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';    // defaults to localStorage for web
import rootReducer from './root-reducer';



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // only navigation will be persisted
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

// import logger from 'redux-logger';
const reduxdebug = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const middlewares = [logger];
// const store = createStore(rootReducer,applyMiddleware(...middlewares));
const store = createStore(persistedReducer,reduxdebug);
const persistor = persistStore(store);

export{
    store,
    persistor
}