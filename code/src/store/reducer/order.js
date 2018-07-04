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
          console.log('kkkkk',action);
          state.orderCart.unpay = action.payload;
          break;
      case TYPES.ORDER_PAY:
          break;
      default:
          break;
  }
  return state;
}