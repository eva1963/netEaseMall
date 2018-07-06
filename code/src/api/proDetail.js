import axios from './index';
/* 评价列表 */
export const queryComments = () => {
    return new Promise((resolve, reject) => {
      let result = require('../static/json/comment.json');
      !!result ? resolve(result) : reject(result);
    })
};

export const queryGoods = (type) => axios.get('/goods/info',{
    params: {
        type
    }
});
export const addGoods = ({goodsID,count}) => axios.post('/store/add',{
    goodsID,
    count
});


