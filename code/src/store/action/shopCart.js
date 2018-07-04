/* 购物车的action派发任务 */
import * as TYPES from '../action-types';
import {getCartInfo, removeCart} from "../../api/shopCart";

export default {
    getCartInfo(state){
        return async dispatch => {
            let shopCartData = await getCartInfo(state);
            dispatch({
                type: TYPES.SHOP_CART_INFO,
                shopCartData
            })
        }
    },
    cartRemove(goodsID){
        return async dispatch => {
            let removeItem = await removeCart(goodsID);
            dispatch({
                type: TYPES.SHOP_CART_REMOVE,
                removeItem,
                goodsID
            })
        }
    },

    inputNum(itemId,val){
        return {
            type:TYPES.SHOP_CART_INPUTNUM,
            val,
            itemId
        }
    },
    changeNum(itemId,step){
        return {
            type:TYPES.SHOP_CART_CHANGENUM,
            itemId,
            step
        }
    },
    changeItemCheck(id){
        return {
            type:TYPES.SHOP_CART_CHANGECHECK,
            checkId:id
        }
    },
    changeSelectAll(){
        return {
            type:TYPES.SHOP_CART_SELECTEALL
        }
    }
}