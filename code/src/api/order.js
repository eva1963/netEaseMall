import axios from './index'

/*@target:获取购物信息
* @params:state  0代表未付款在购物车中 1已经付款，在我的订单中*/

export function queryOrderInfo(state) {
    return axios.get('/store/info',{
        params:state
    })
}