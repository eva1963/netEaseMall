/* 产品详情的reducer */
import * as TYPES from '../action-types';

export default function (state = {
   stepIndex: 1,
    commentList: []
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
        default:
    }
    return state;
}