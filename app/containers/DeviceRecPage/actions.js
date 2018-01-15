/*
 *
 * Pageload actions
 *
 */
export const CREATE_POST = 'CREATE_POST';
export const CHANGE_STATE_VALUE = 'CHANGE_STATE_VALUE';



///////////////////////////
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

export function customerFormSubmit() {
  return {
    type: CREATE_POST,
    url: '../../json/rexResponse.json',
	 };
}
