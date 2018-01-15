
import { fromJS } from 'immutable';
import checkStatusReducer from '../reducer';

describe('checkStatusReducer', () => {
  it('returns the initial state', () => {
    expect(checkStatusReducer(undefined, {})).toEqual(fromJS({}));
  });
});
