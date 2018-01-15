import { createSelector } from 'reselect';
const selectCheckStatusDomain = (state) => state.get('checkStatus');


const makeSelectImei = () => createSelector(
  selectCheckStatusDomain,
  (substate) => substate.get('imei')
);
const makeSelectUnlockNumber = () => createSelector(
  selectCheckStatusDomain,
  (substate) => substate.get('unlocknuber')
);
export {
  selectCheckStatusDomain,
  makeSelectImei,
  makeSelectUnlockNumber,
};
