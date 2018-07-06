/* 分类的action派发任务 */
import * as TYPES from '../action-types';
import {queryGoods} from '../../api/classify';

let classify={
    queryInfo(mode){
        return async dispatch=>{
            let goodsData=await queryGoods(mode);
            dispatch({
                type:TYPES.CLASSIFY_QUERY_GOODS,
                goodsData
            });
        }
    },
    queryCategory(goodsData,curType){
        if(goodsData&&goodsData.length!==0) {
            return dispatch => {
                let categList = [], cateResultList = [];
                goodsData.forEach(({type,category}) => {
                    if (type === curType && !categList.includes(category)) {
                        categList.push(category);
                        cateResultList.push({type: type, category: category});
                    }
                });
                categList = null;
                dispatch({
                    type: TYPES.CLASSIFY_QUERY_CATEGORY,
                    cateResultList
                });
            }
        }

    }
};
export default classify;