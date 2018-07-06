import axios from "./index";

export function brandList(limit) {
    return axios.get('/goods/list', {
        params: {
            limit
        }
    });
}
/*@target：获取搜索结果
* @params: 商品name*/
export function search(name={}) {
    return axios.get('/goods/search', {
        params:name
    });
}
