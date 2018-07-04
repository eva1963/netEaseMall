/* 评价列表 */
export const queryComments = () => {
    return new Promise((resolve, reject) => {
      let result = require('../static/json/comment.json');
      !!result ? resolve(result) : reject(result);
    })
};