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
      id: 1},
    2: { name: "Ginger",
      brand: "GT's",
      price: 2,
      flavor: 'ginger',
      quantity: 110,
      id :2 },
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(selectKegReducer(null, { type: null })).toEqual(null);
  });
  test('Should successfully update selected keg ', () =>{
    action = {
      type: a.SELECT_KEG,
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
});
