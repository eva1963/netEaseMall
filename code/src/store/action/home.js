/* 首页的action派发任务 */
import * as TYPES from '../action-types';
import {brandList} from '../../api/home';

let home={
    brandList(payload = {}) {
        let {limit = 4} = payload;
        return async dispatch => {
            let result = await brandList({
                limit
            });
            dispatch({
                type: TYPES.PRODUCT_BRANDFLOOR,
                result,
            });
        }
    },

};
export default home;