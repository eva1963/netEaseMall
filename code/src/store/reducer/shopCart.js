/* 购物车的reducer */
import * as TYPES from '../action-types';

export default function shopCart (state = {
    cartData:[],
    totalCount:0,
    selectAll:false
}, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        //获取购物车信息
        case  TYPES.SHOP_CART_INFO:
            let {shopCartData} = action;
            if(+shopCartData.code === 0){
                state.cartData = shopCartData.data;
                state.cartData.forEach(item => {
                    item.isChecked = false;
                });
            }
            break;
        //从购物车移除
        case TYPES.SHOP_CART_REMOVE:
            let {removeItem,goodsID:removeGoodsID} = action;
            if(+removeItem.code === 0){
                state.cartData = state.cartData.filter(({goodsID}) => +goodsID !== +removeGoodsID);
            }
            break;
        //输入框输入
        case TYPES.SHOP_CART_INPUTNUM:
            let inpItem = state.cartData.find(({goodsID}) => +goodsID === +action.itemId);
            inpItem.count = action.val;
            break;
        //点击加减号更改数量
        case TYPES.SHOP_CART_CHANGENUM:
            let changeItem = state.cartData.find(({goodsID}) => +goodsID === +action.itemId);
            changeItem.count = +changeItem.count + action.step;
            changeItem.count <= 0 ? changeItem.count = 1 : null;
            break;
        //选中与非选中
        case TYPES.SHOP_CART_CHANGECHECK:
            let checkItem = state.cartData.find(({goodsID}) => +goodsID === +action.checkId);
            checkItem.isChecked = !checkItem.isChecked;
            state.selectAll = state.cartData.every(item =>item.isChecked);
            break;
        //全选操作
        case TYPES.SHOP_CART_SELECTEALL:
            state.selectAll = !state.selectAll;
            state.cartData.forEach(item => item.isChecked = state.selectAll);
            break;
        //支付
        case TYPES.PRODUCT_DETAIL_COMMENTLIST:
            let {orderID,result:payRes} = action;
            if(+payRes.code === 0){
                state.cartData = state.cartData.filter(({orderID}) => +orderID !== +orderID);
            }
            break;
        //加入购物车
        case TYPES.ADD_SHOP_CART:
            let {result:addResult,goodsID:addGoodsID,count:addCount} = action;
            if(+addResult.code === 0){
                //加入购物车成功
                let addItem = state.cartData.find(({goodsID}) => +goodsID === (+addGoodsID));
                if(addItem){
                    addItem.count += addCount;
                }else{

                }

            }
            break;
    }
    return state;
}
