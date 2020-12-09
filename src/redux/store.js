// import {createStore,applyMiddleware} from 'redux';
import {createStore} from 'redux';
import rootReducer from './root-reducer';
// import logger from 'redux-logger';
const reduxdebug = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const middlewares = [logger];
// const store = createStore(rootReducer,applyMiddleware(...middlewares));
const store = createStore(rootReducer,reduxdebug);
export default store;