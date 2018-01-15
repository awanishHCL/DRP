import { createSelector } from 'reselect';
const selectUnlockWirelessFormDomain = (state) => state.get('unlockWirelessForm');


const makeSelectAttCustomerType = () => createSelector(
  selectUnlockWirelessFormDomain,
  (substate) => substate.get('attcustomertype')
);
const makeSelectWirelessNumber = () => createSelector(
  selectUnlockWirelessFormDomain,
  (substate) => substate.get('wirelessnumber')
);
export {
  selectUnlockWirelessFormDomain,
  makeSelectAttCustomerType,
  makeSelectWirelessNumber,
};
