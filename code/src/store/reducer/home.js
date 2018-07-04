/* 首页的reducer */
import * as TYPES from '../action-types';

export default function home(state = {}, action) {
    state=JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.PRODUCT_BRANDFLOOR:
         state.brandData=action.goodsData.data;
        break;
    }
    return state;
}