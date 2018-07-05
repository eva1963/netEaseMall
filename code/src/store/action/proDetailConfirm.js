import * as TYPES from "../action-types";
import prodDetailConfirm from "../../api/prodDetailConfirm";

let proDetaillConfirm={
    proDetilConfirm(){
        return {
            type:TYPES.PRODUCT_DETAIL_CONFIRM,
            payload:prodDetailConfirm({state:0})
        }
    }
}

export default proDetaillConfirm;
