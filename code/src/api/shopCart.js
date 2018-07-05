import axios from './index'

export function getCartInfo(state = 0){
    return axios.get('/store/info',{
        params:{
            state
        }
    });
}
export function removeCart(goodsID){
    return axios.post('/store/remove',{goodsID});
}
