/* 购物车的action派发任务 */
import * as TYPES from '../action-types';
import {getCartInfo, payOrder, removeCart, removeCartAry} from "../../api/shopCart";
import {addGoods} from "../../api/proDetail";

export default {
    //获取购物车中的信息
    getCartInfo(state) {
        return async dispatch => {
            let shopCartData = await getCartInfo(state);
            dispatch({
                type: TYPES.SHOP_CART_INFO,
                shopCartData
            })
        }
    },
    //删除购物车中的某一个商品
    cartRemove(goodsID) {
        return async dispatch => {
            let removeItem = await removeCart(goodsID);
            console.log(removeItem);
            dispatch({
                type: TYPES.SHOP_CART_REMOVE,
                removeItem,
                goodsID
            })
        }
    },
    //文本框输入购物车中商品数量
    inputNum(itemId, val) {
        return {
            type: TYPES.SHOP_CART_INPUTNUM,
            val,
            itemId
        }
    },
    //点击加减号改变数量
    changeNum(itemId, step) {
        return {
            type: TYPES.SHOP_CART_CHANGENUM,
            itemId,
            step
        }
    },
    //商品选中与否
    changeItemCheck(goodsID) {
        return {
            type: TYPES.SHOP_CART_CHANGECHECK,
            checkId: goodsID
        }
    },
    //全选和全不选
    changeSelectAll() {
        return {
            type: TYPES.SHOP_CART_SELECTEALL
        }
    },
    //支付
    payOrder(orderID) {
        return async dispatch => {
            let result = payOrder(orderID);
            dispatch({
                type: TYPES.PRODUCT_DETAIL_CONFIRM,
                result,
                orderID
            })
        }
    },
    //加入购物车
    addCart({goodsID,count} = {}) {
        return async dispatch => {

            let result = await addGoods({goodsID,count});
            dispatch({
                type: TYPES.ADD_SHOP_CART,
                result,
                goodsID,
                count
            })
        }

    }

}