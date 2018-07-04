/* 产品详情的reducer */
import * as TYPES from '../action-types';

export default function (state = {
   stepIndex: 1,
    commentList: [],
    goodsList: [],
}, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.PRODUCT_DETAIL_STEPINDEX:
            state.stepIndex = action.stepIndex;
             break;

        case TYPES.PRODUCT_DETAIL_COMMENTLIST:
            if(parseFloat(action.result.code) === 0){
                state.commentList = action.result.data.result;
            }
            break;
        case TYPES.QUERY_GOODS_LIST:
            if(parseFloat(action.result.code) === 0){
                state.goodsList = action.result.data;
            }
            break;
        default:
    }
    return state;
}