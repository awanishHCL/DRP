/*
 *
 * CheckStatus reducer
 *
 */

import { fromJS } from 'immutable';
import { createBrowserHistory } from 'history';
import checkStatusJson from '../../endpoint/checkstatus.json';

export const history = createBrowserHistory({ forceRefresh: true });
export const CREATE_POST = 'CREATE_POST';
export const CHANGE_STATE_VALUE = 'CHANGE_STATE_VALUE';

const initialState = fromJS({
  imei: '',
  unlocknumber: '',
});

function checkStatusReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STATE_VALUE:
      return state
			.set(action.name, action.value);
    case CREATE_POST:
      console.log('state', JSON.stringify(state));
      const request = fetch(action.url, { method: 'get' });
      request.then((response) => {
	    console.log('response', checkStatusJson);
        history.push('/statuspage');
        return response;
      });
    default:
      return state;
  }
}

export default checkStatusReducer;
