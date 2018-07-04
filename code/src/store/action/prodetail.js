import * as TYPES from '../action-types';
import {queryComments} from '../../api/proDetail';

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
    }
}