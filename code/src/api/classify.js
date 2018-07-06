import axios from './index';

export function queryGoods(mode) {
    let result=mode["type"];
        return axios.get('/goods/info',{
            params:{
                type:result
            }
        });
}