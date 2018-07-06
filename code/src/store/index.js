import reducers from './reducer';
import {createStore,applyMiddleware} from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

let store = createStore(reducers, applyMiddleware(reduxLogger,reduxThunk,reduxPromise));
export default store;
