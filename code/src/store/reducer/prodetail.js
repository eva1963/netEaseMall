/* 产品详情的reducer */
import * as TYPES from '../action-types';

export default function (state = {
    stepIndex: 1,
    commentList: [],
    goodsList: [],
    productInfo: {
        color: '请选择商品规格',
        count: 1
    }
}, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.PRODUCT_DETAIL_STEPINDEX:
            state.stepIndex = action.stepIndex;
            break;

        case TYPES.PRODUCT_DETAIL_COMMENTLIST:
            if (parseFloat(action.result.code) === 0) {
                state.commentList = action.result.data.result;
            }
            break;
        case TYPES.QUERY_GOODS_LIST:
            if (parseFloat(action.result.code) === 0) {
                state.goodsList = action.result.data;
            }
            break;
        case TYPES.SET_PRODUCT_COMMERCIAL:
            state.productInfo = Object.assign(state.productInfo, action.result);
            break;
        default:
    }
    return state;
}