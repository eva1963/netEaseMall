/* 首页的action派发任务 */
import * as TYPES from '../action-types';
import {brandList,search} from '../../api/home';

let home={
    brandList(limit = 4) {
        return async dispatch => {
            let result = await brandList(limit);
            dispatch({
                type: TYPES.PRODUCT_BRANDFLOOR,
                result,
            });
        }
    },
};
export default home;