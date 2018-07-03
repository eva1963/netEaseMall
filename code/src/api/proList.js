import axios from "axios";

export function proList() {
    return axios.get('/all');
}