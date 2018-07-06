import * as TYPES from "../action-types";
import {payGoods} from "../../api/payGoods";
import {removeCart} from "../../api/shopCart";

export default function payGoods(oderID){
    return async dispatch => {
        let payItem = await removeCart(orderID);
        dispatch({
            type: TYPES.PAY_GOODS,
            payItem,
            oderID
        })
    }
};
