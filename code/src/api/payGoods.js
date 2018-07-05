import axios from "axios";

export function payGoods(){
    return axios.post('/store/pay',{params:{
        orderID:{}
        }})
}