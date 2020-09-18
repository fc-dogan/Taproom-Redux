import * as a from '../actions/ActionTypes';

export default (state=null ,action) => {
  const { name, brand, price, flavor, quantity, id } = action;
  switch(action.type){
    case a.SELECT_KEG :
      const newState = {
        name: name,
        brand: brand,
        price: price,
        flavor: flavor,
        quantity: quantity,
        id: id
      };
      return newState;
    case a.UNSELECT_KEG:
      return null;
    case a.SELL_KEG:
      const nState = state[id];
      const updatedKeg = {...nState, quantity: nState.quantity - 1}
      return updatedKeg;
    default:
      return state;
  }
}