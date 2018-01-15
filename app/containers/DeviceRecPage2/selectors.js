import { createSelector } from 'reselect';
const selectCustomerFormDomain = (state) => state.get('customerForm');
const selectDevicerecDomain = (state) => state.get('devicerec');



const makeSelectDevicePage = () => createSelector(
  selectDevicerecDomain,
  (getSta) => getSta.get('devicerec')
);
const makeSelectFirstName = () => createSelector(
  selectCustomerFormDomain,
  (substate) => substate.get('firstname')
);
const makeSelectLastName = () => createSelector(
  selectCustomerFormDomain,
  (substate) => substate.get('lastname')
);
const makeSelectPasscode = () => createSelector(
  selectCustomerFormDomain,
  (substate) => substate.get('passcode')
);
const makeSelectEmailId = () => createSelector(
  selectCustomerFormDomain,
  (substate) => substate.get('email')
);
const makeSelectConfirmEmailId = () => createSelector(
  selectCustomerFormDomain,
  (substate) => substate.get('confirmemail')
);

//

export {
  makeSelectDevicePage,
  selectCustomerFormDomain,
  makeSelectFirstName,
  makeSelectLastName,
  makeSelectPasscode,
  makeSelectEmailId,
  makeSelectConfirmEmailId,
  
};
