import axios from "axios";

export function brandList() {
    return axios.get('/goods/list', {
        params: {
            limit:4
        }
    });
}