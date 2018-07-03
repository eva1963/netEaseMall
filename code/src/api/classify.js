import axios from './index';

export function queryGoods(mode) {
    let result=mode["all"];
        return axios.get('/goods/info',{
            params:{
                type:result
            }
        });
}