import kegListReducer from '../../reducers/kegListReducer';
import * as a from '../../actions/ActionTypes';

describe('kegListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  let action;
  const kegData = {
      name: "Synergy",
      brand: "GT's",
      price: 3,
      flavor: "Cosmic Cranberry",
      quantity: 120,
      id: 1
  };

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
});