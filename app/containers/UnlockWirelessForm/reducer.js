/*
 *
 * UnlockWirelessForm reducer
 *
 */

import { fromJS } from 'immutable';
import { createBrowserHistory } from 'history';
import wirelessFormJson from '../../endpoint/wirelessForm.json';

export const CREATE_POST = 'CREATE_POST';
export const CHANGE_STATE_VALUE = 'CHANGE_STATE_VALUE';
export const history = createBrowserHistory({ forceRefresh: true });


const initialState = fromJS({
  attcustomertype: '',
  wirelessnumber: '',
});

function unlockWirelessFormReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STATE_VALUE:
      return state
				.set(action.name, action.value);
    case CREATE_POST:
      const request = fetch(action.url, { method: 'get' });
      request.then((response) => {
        console.log('wirelessFormJson', wirelessFormJson);
        history.push('/unlockstep2');
        return response;
      });
    default:
      return state;
  }
}

export default unlockWirelessFormReducer;
