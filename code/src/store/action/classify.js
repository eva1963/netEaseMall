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
    }
};
export default classify;