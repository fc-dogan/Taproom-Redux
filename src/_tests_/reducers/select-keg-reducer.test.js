import * as a from '../../actions/ActionTypes';
import selectKegReducer from "../../reducers/select-keg-reducer";

describe('selectKegReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(selectKegReducer(null, { type: null })).toEqual(null);
  });
})
