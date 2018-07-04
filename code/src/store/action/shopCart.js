/* 购物车的action派发任务 */
import * as TYPES from '../action-types';
import {getCartInfo} from "../../api/shopCart";

export default {
    getCartInfo(state){
        return async dispatch => {
            let shopCartData = await getCartInfo(state);
            dispatch({
                type: TYPES.SHOP_CART_INFO,
                shopCartData
            })
        }
    }
}