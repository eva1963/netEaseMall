/* 个人中心的action派发任务 */
import * as TYPES from '../action-types';
import {queryInfo} from '../../api/person';

let person = {
    queryBaseInfo() {
        return {
            type: TYPES.PERSON_QUERY_BASE,
            payload: queryInfo()
        }
    }
};
export default person;