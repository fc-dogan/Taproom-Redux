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
};
export const deleteKeg = (id) => {
  return {
    type: a.DELETE_KEG,
    id
  }
}
export const toggleForm = () => ({
  type: a.TOGGLE_FORM
});
export const sellKeg = (id) => ({
  type: a.SELL_KEG,
  id: id
});
export const editingKeg = () => ({
  type: a.EDITING_KEG
});
export const selectKeg = (id) => {
  return {
    type: a.SELECT_KEG,
    id
  }
}