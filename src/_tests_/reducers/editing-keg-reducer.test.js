import * as a from '../../actions/ActionTypes';
import editingKegReducer from "../../reducers/editing-keg-reducer";

describe('editingKegReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(editingKegReducer(false, { type: null })).toEqual(false)
  });
  test('Should toggle editing state to true', () => {
    expect(editingKegReducer(false, { type: a.EDITING_KEG })).toEqual(true);
  });
})
