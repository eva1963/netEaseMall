import * as TYPES from "../action-types";

let INIT_STATE = {
    oderID: null
};
export default function payGoods(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    let payload = {};
    switch (action.type) {
        case TYPES.PAY_GOODS:
            let {orderID} = action;
            state.cartData = state.cartData.filter(({id}) => +id !== +goodsID);
            break;
    }
    return state;
};