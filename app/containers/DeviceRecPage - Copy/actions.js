/*
 *
 * Pageload actions
 *
 */
export const CREATE_POST = 'CREATE_POST';
export const CHANGE_STATE_VALUE = 'CHANGE_STATE_VALUE';
export const SERVICE_CALL = 'SERVICE_CALL';


///////////////////////////serviceCall
import shop from 'services';
//import * as types from '../constants/ActionTypes'
const receiveProducts = products => ({
  type: CREATE_POST,
  products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}
///////////////////////////////////////
export function changeStateValue(name, value) {
  return {
    type: CHANGE_STATE_VALUE,
    name,
    value,
  };
}
var state = {
  upgradeUser:[],
  ReceiveData:[],    
}
///////////////////////////////////////
import {unlockCustomerFormReducer} from './reducer';
export function serviceCall(value) {
  console.log('service call-----',value);
  unlockCustomerFormReducer(state,SERVICE_CALL);
  // return {
  //   type: SERVICE_CALL,
  //   value,
  // };
}



export function customerFormSubmit() {
  return {
    type: CREATE_POST,
    url: '../../json/rexResponse.json',
	 };
}
