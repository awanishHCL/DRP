
import { fromJS } from 'immutable';
import unlockStep2Reducer from '../reducer';

describe('unlockStep2Reducer', () => {
  it('returns the initial state', () => {
    expect(unlockStep2Reducer(undefined, {})).toEqual(fromJS({}));
  });
});
