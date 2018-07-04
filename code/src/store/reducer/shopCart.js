/* 购物车的reducer */
import * as TYPES from '../action-types';

export default function shopCart (state = {
    cartData:[]
}, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case  TYPES.SHOP_CART_INFO:
            let {shopCartData} = action;
            if(+shopCartData.code === 0){
                state.cartData = shopCartData.data;
            }
            break;
    }
    return state;
}