import * as TYPES from '../action-types';
import {queryComments,queryGoods} from '../../api/proDetail';

export default {
    updateIndex(index) {
        return dispatch => {
            dispatch({
                type: TYPES.PRODUCT_DETAIL_STEPINDEX,
                stepIndex: index
            })
        }
    },
    queryCommentList() {
        return async dispatch => {
            let result = await queryComments();
            dispatch({
                type: TYPES.PRODUCT_DETAIL_COMMENTLIST,
                result
            })
        }
    },
    queryGoods(type='all') {
        return async dispatch=>{
            let result = await queryGoods(type);
            dispatch({
                type: TYPES.QUERY_GOODS_LIST,
                result
            })
        }
    }
}