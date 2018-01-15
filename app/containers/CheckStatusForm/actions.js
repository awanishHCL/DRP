/*
 *
 * CheckStatus actions
 *
 */
export const CREATE_POST = 'CREATE_POST';
export const CHANGE_STATE_VALUE = 'CHANGE_STATE_VALUE';

export function changeStateValue(name, value) {
  return {
    type: CHANGE_STATE_VALUE,
    name,
    value,
  };
}

export function checkUnlockStatus() {
  return {
    type: CREATE_POST,
    url: '../../endpoint/checkstatus.json',
	 };
}
