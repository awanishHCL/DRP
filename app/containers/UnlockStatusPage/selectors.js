import { createSelector } from 'reselect';

/**
 * Direct selector to the checkStatus state domain
 */
const selectCheckStatusDomain = (state) => state.get('checkStatus');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CheckStatus
 */

const makeSelectCheckStatus = () => createSelector(
  selectCheckStatusDomain,
  (substate) => substate.toJS()
);

export default makeSelectCheckStatus;
export {
  selectCheckStatusDomain,
};
