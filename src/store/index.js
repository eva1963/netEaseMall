import reducers from './reducer';
import {createStore,applyMiddleware} from 'redux';
import reduxLogger from 'redux-logger';
import reduxthunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

let store = createStore(reducers, applyMiddleware(reduxLogger,reduxthunk,reduxPromise));
export default store;
