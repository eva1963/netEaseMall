import axios from 'axios';

export default function prodDetailConfirm(state){
    return axios.get('/store/info',{
        params:{
            state:0
        }
    })
};