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

export const deleteKeg = (id) => {
  return {
    type: a.DELETE_KEG,
    id
  }
}