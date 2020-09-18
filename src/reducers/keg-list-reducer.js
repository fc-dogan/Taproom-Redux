import * as a from '../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, price, flavor, quantity, id } = action;
  switch (action.type) {
    case a.ADD_KEG :
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          flavor: flavor,
          quantity: quantity,
          id: id
        }
      });
    case a.DELETE_KEG :
      const newState = { ...state };
      delete newState[id];
      return newState;
    case a.SELL_KEG:
      const decrasedQuantity = state[id].quantity - 1;
      const updatedKegList = {...state, [id]:{...state[id], quantity:decrasedQuantity}}
      return updatedKegList;
    default:
      return state;
  }
};