import * as TYPES from '../../store/action-types'

let INIT_STATE = {
    orderCart:{
        unpay: [],
        pay:[]
    }
};

export default function order(state=INIT_STATE,action) {
  state = JSON.parse(JSON.stringify(state));
  switch (action.type){
      case TYPES.ORDER_UNPAY:
          state.orderCart.unpay = action.payload.data;
          break;
      case TYPES.ORDER_PAY:
          state.orderCart.pay = action.payload.data;
          break;
      default:
          break;
  }
  return state;
}