import { createSelector } from 'reselect';
const selectSecondCustomerFormDomain = (state) => state.get('secondCustomerForm');


const makeSelectImei = () => createSelector(
  selectSecondCustomerFormDomain,
  (substate) => substate.get('imei')
);

export {
  selectSecondCustomerFormDomain,
  makeSelectImei,
};
