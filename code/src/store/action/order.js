/*订单*/
import * as TYPES from '../../store/action-types'
import {queryOrderInfo} from '../../api/order'

let order = {
    /*获取未支付的订单*/
    queryUnpay(payload) {
        return {
            type: TYPES.ORDER_UNPAY,
            payload:queryOrderInfo({state:0})
        }
    },
    /*获取支付的订单*/
    queryPay(payload) {
        return {
            type: TYPES.ORDER_PAY,
            payload:queryOrderInfo({state:1})
        }
    }
};

export default order;