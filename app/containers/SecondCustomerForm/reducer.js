/*
 *
 * UnlockWirelessForm reducer
 *
 */

import { fromJS } from 'immutable';
import { createBrowserHistory } from 'history';
import customerFormJson from '../../endpoint/customerForm.json';

export const CREATE_POST = 'CREATE_POST';
export const CHANGE_STATE_VALUE = 'CHANGE_STATE_VALUE';
export const history = createBrowserHistory({ forceRefresh: true });

const initialState = fromJS({
  imei: '',
});

function secondCustomerFormReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STATE_VALUE:
      return state
				.set(action.name, action.value);
    case CREATE_POST:
      const request = fetch(action.url, { method: 'get' });
      request.then((response) => {
        console.log('response', customerFormJson);
        history.push('/confirmation');
        return response;
      });
    default:
      return state;
  }
}

export default secondCustomerFormReducer;
