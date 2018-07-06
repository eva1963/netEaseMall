/*订单*/
import * as TYPES from '../../store/action-types'
import {queryOrderInfo} from '../../api/order'

let order = {
    /*获取未支付的订单*/
    async queryUnpay(payload) {
        payload = await queryOrderInfo({state:0});
        return {
            type: TYPES.ORDER_UNPAY,
            payload,
        }
    },
    /*获取支付的订单*/
    async queryPay(payload) {
        payload = await queryOrderInfo({state:1});
        return {
            type: TYPES.ORDER_PAY,
            payload,
        }
    }
};

export default order;