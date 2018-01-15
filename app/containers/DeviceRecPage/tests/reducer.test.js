
import { fromJS } from 'immutable';
import unlockHomePageReducer from '../reducer';

describe('unlockHomePageReducer', () => {
  it('returns the initial state', () => {
    expect(unlockHomePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
