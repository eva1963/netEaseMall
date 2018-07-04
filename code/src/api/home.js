import axios from "axios";

export function brandList(limit) {
    return axios.get('/goods/list', {
        params: {
            limit
        }
    });
}