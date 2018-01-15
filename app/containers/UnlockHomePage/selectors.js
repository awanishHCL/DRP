import { createSelector } from 'reselect';

/**
 * Direct selector to the unlockHomePage state domain
 */
const selectUnlockHomePageDomain = (state) => state.get('unlockHomePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UnlockHomePage
 */

const makeSelectUnlockHomePage = () => createSelector(
  selectUnlockHomePageDomain,
  (substate) => substate.toJS()
);

export default makeSelectUnlockHomePage;
export {
  selectUnlockHomePageDomain,
};
