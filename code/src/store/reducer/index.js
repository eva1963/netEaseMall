/**
 * @autor: Eva
 * @Created by Eva on 2018/7/1.
 */
import {combineReducers} from 'redux';
import home from './home';
import classify from './classify';
import person from './person';
import shopcart from './shopCart';
import prodetail from './prodetail';
import order from './order';

let reducers = combineReducers({
    home,
    classify,
    person,
    shopcart,
    prodetail,
    order
});
export default reducers;