import * as a from '../../actions/ActionTypes';
import selectKegReducer from "../../reducers/select-keg-reducer";

describe('selectKegReducer', () => {
  let action;
  const currentState = {
    1: {name: "Synergy",
      brand: "GT's",
      price: 3,
      flavor: "Cosmic Cranberry",
      quantity: 120,
      id: 1}
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(selectKegReducer(null, { type: null })).toEqual(null);
  });
  test('Should successfully update selected keg ', () =>{
    action = {
      type: a.SELECT_KEG,
      name: "Synergy",
      brand: "GT's",
      price: 3,
      flavor: "Cosmic Cranberry",
      quantity: 120,
      id: 1
    };
    expect(selectKegReducer(currentState, action )).toEqual({
      name: "Synergy",
      brand: "GT's",
      price: 3,
      flavor: "Cosmic Cranberry",
      quantity: 120,
      id: 1
    });
  });
  test('should reset selected keg to null', () => {
    action = {
      type: a.UNSELECT_KEG
    };
    expect(selectKegReducer(currentState, action)).toEqual(null);
  });
});
