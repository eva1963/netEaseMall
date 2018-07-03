/* 分类的reducer */
import * as TYPES from '../action-types';
let INIT_STATE={
    goodsData:[]
};
export default function (state = INIT_STATE, action) {
    state=JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.CLASSIFY_QUERY_GOODS:
            state.goodsData=action.goodsData.data;
            break;

        default:
            break;
    }
    return state;
}