
import { fromJS } from 'immutable';
import unlockWirelessFormReducer from '../reducer';

describe('unlockWirelessFormReducer', () => {
  it('returns the initial state', () => {
    expect(unlockWirelessFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
