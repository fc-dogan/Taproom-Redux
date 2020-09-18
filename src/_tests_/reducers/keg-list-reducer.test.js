import kegListReducer from '../../reducers/kegListReducer';
import * as a from '../../actions/ActionTypes';

describe('kegListReducer', () => {
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

  let action;
  const kegData = {
    name: "Synergy",
    brand: "GT's",
    price: 3,
    flavor: "Cosmic Cranberry",
    quantity: 120,
    id: 1
  };
  
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });
  test('Should successfully add a new keg data to allKegList', () => {
    const { name, brand, price, flavor, quantity, id } = kegData;
    action ={
      type: a.ADD_KEG,
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      quantity: quantity,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        flavor: flavor,
        quantity: quantity,
        id: id
      }
    });
  });
  test('Should successfully delete a keg', () => {
    action = {
      type: a.DELETE_KEG,
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: { name: "Ginger",
      brand: "GT's",
      price: 2,
      flavor: 'ginger',
      quantity: 110,
      id :2 }
    });
  });
});