/* 产品详情的reducer */
import * as TYPES from '../action-types';

export default function (state = {
   stepIndex: 1
}, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.PRODUCT_DETAIL_STEPINDEX:
            state.stepIndex = action.stepIndex;
             break;

        default:
    }
    return state;
}