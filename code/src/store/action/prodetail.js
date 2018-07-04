import * as TYPES from '../action-types';
import {queryComments,queryGoods,addGoods} from '../../api/proDetail';

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
    },
    setProductCommercial(obj) {
        return dispatch => {
            dispatch({
                type:TYPES.SET_PRODUCT_COMMERCIAL,
                result: obj
            })
        }
    },
    addCart(payload) {
        let {goodsID,count} = payload;
        return async dispatch => {
            let result = await addGoods({
                goodsID,
                count
            });
            dispatch({
                type: TYPES.ADD_SHOP_CART,
                result
            })
        }

    }
}