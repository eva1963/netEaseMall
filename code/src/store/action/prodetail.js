import * as TYPES from '../action-types';

export default {
    updateIndex(index) {
        return dispatch => {
            dispatch({
                type: TYPES.PRODUCT_DETAIL_STEPINDEX,
                stepIndex: index
            })
        }
    }
}