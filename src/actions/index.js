import * as a from './ActionTypes';

export const addKeg = (kegData) =>{
  const { name, brand, price, flavor, quantity, id } = kegData;
  return {
    type: a.ADD_KEG,
    name: name,
    brand: brand,
    price: price,
    flavor: flavor,
    quantity: quantity,
    id: id
  }
}