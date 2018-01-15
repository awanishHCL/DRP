/*
 *
 * CustomerForm reducer
 *
 */
import { fromJS } from 'immutable';
import { createBrowserHistory } from 'history';
import customerFormJson from '../../json/rexResponse.json';
import { SERVICE_CALL,serviceCall } from './actions';
export const CREATE_POST = 'CREATE_POST';
export const CHANGE_STATE_VALUE = 'CHANGE_STATE_VALUE';
//import {}  = 'SERVICE_CALL';
export const history = createBrowserHistory({ forceRefresh: true });
import UserInfoSecJson from 'json/upgradingUserInfo.json';

const initialState = fromJS({
  upgradeUser:null,
  receiveData:null,
});
const rexBySkuServer='https://www.att.com/rex/recommendation/rexBySku/';
function unlockCustomerFormReducer(state = initialState, action) {

console.log('inside reducer--------------',state);
console.log(action);
  switch (action && action.type) {
    case CHANGE_STATE_VALUE:
      return state
        .set(action.name, action.value);
    case SERVICE_CALL:
    const call = fetch(rexBySkuServer+UserInfoSecJson.payload.deviceSkuId, { method: 'get' });
    request.then((response) => {
      console.log('response------------>>>>>>>>');
      console.log(response);
      //state.set();
      setState({ ReceiveData : response,
      });  
      //history.push('/unlockstep3');
     // return response;
    });
    case CREATE_POST:
      const request = fetch(action.url, { method: 'get' });
      request.then((response) => {
        console.log('response', customerFormJson);
        //history.push('/unlockstep3');
        return response;
      });
    default:
      return state;
  }
}

export default unlockCustomerFormReducer;
