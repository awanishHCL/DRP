
import { fromJS } from 'immutable';
import unlockStep3Reducer from '../reducer';

describe('unlockStep3Reducer', () => {
  it('returns the initial state', () => {
    expect(unlockStep3Reducer(undefined, {})).toEqual(fromJS({}));
  });
});
