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
    
    default:
      return state;
  }
}