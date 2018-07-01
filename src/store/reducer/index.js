/**
 * @autor: Eva
 * @Created by Eva on 2018/7/1.
 */
import {combineReducers} from 'redux';
import home from './home';
import knowledge from './knowledge';
import classify from './classify';
import person from './person';
import shopcart from './shopCart';

let reducers = combineReducers({
    home,
    knowledge,
    classify,
    person,
    shopcart
});
export default reducers;