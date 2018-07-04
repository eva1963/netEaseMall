import axios from './index';

//login
export function login(payload){
    return axios.post('/personal/login',payload);
}

//register
export function register(payload) {
    return axios.post('/personal/register', payload);
}

//check
export function checkLogin() {
    return axios.get('/personal/login');
}

//exit
export function exitLogin() {
    return axios.get('/personal/out');
}

//=>get info
export function queryInfo() {
    return axios.get('/personal/info');
}
